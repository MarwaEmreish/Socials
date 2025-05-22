// /pages/api/comments/index.js
import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Fetch all comments with user and likes info
    const comments = await prisma.comment.findMany({
      include: {
        user: true,
        likes: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })
    res.status(200).json(comments)
  } else if (req.method === 'POST') {
    // Create a new comment
    const { userId, content } = req.body
    if (!userId || !content) {
      return res.status(400).json({ error: 'Missing userId or content' })
    }
    const comment = await prisma.comment.create({
      data: {
        content,
        userId,
      },
      include: {
        user: true,
        likes: true,
      },
    })
    res.status(201).json(comment)
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
