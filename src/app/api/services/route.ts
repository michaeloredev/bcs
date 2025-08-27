import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const categories = await prisma.serviceCategory.findMany({
    include: { serviceTypes: true }
  })

  return NextResponse.json({
    categories: categories.map((c) => ({
      id: c.id,
      name: c.name,
      description: c.description,
      serviceTypes: c.serviceTypes.map((st) => ({ id: st.id, name: st.name }))
    }))
  })
}
