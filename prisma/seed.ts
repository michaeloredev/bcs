import { prisma } from '../src/lib/prisma'

async function main() {
  // Basic seed for categories & service types
  const categories = [
    {
      name: 'Home',
      description: 'Home maintenance and improvement services',
      serviceTypes: [
        'Plumbing',
        'Electrical Repair',
        'House Cleaning',
        'Landscaping',
        'Pest Control'
      ]
    },
    {
      name: 'Automotive',
      description: 'Vehicle care and maintenance',
      serviceTypes: [
        'Oil Change',
        'Tire Services',
        'Car Wash',
        'Auto Repair',
        'Detailing'
      ]
    },
    {
      name: 'Legal',
      description: 'Legal assistance and advisory',
      serviceTypes: [
        'Notary Services',
        'Estate Planning',
        'Contract Review',
        'Family Law',
        'Real Estate Law'
      ]
    }
  ]

  for (const cat of categories) {
    const createdCat = await prisma.serviceCategory.upsert({
      where: { name: cat.name },
      create: { name: cat.name, description: cat.description },
      update: { description: cat.description }
    })

    for (const st of cat.serviceTypes) {
      await prisma.serviceType.upsert({
        where: { name_categoryId: { name: st, categoryId: createdCat.id } },
        create: { name: st, categoryId: createdCat.id },
        update: {}
      })
    }
  }

  console.log('Seed completed')
}

main().catch(e => {
  console.error(e)
  process.exit(1)
}).finally(async () => {
  await prisma.$disconnect()
})
