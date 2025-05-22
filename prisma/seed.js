const prisma = require('../lib/prisma')

async function main() {
  console.log("Seeding started")

  // Create a user
  const user = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@example.com",
      image: "https://example.com/alice.jpg",
    },
  })
  console.log("Created user:", user)

  // Create a comment linked to the user
  const comment = await prisma.comment.create({
    data: {
      content: "This is a sample comment content",
      userId: user.id,
    },
  })
  console.log("Created comment:", comment)

  console.log("Seeding finished")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
