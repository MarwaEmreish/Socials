import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const comments = await prisma.comment.findMany({
      include: {
        user: true,
        likes: true,
      },
      orderBy: { createdAt: 'desc' },
    })
    res.json(comments)
  } else if (req.method === 'POST') {
    const { content, userId } = req.body
    if (!content || !userId) {
      return res.status(400).json({ message: 'Missing content or userId' })
    }
    const comment = await prisma.comment.create({
      data: { content, userId },
    })
    res.status(201).json(comment)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
