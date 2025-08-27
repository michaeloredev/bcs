import { prisma } from "@/lib/prisma";
import ServiceBrowser from "./ServiceBrowser";

export const revalidate = 3600;

export default async function ServicesPage() {
  const categories = await prisma.serviceCategory.findMany({
    include: { serviceTypes: true },
  });
  const data = categories.map((c) => ({
    title: c.name,
    description: c.description || "",
    services: c.serviceTypes.map((st) => st.name),
  }));
  return <ServiceBrowser categories={data} />;
}