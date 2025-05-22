// /pages/api/comments/[id]/like.js
import prisma from '../../../../lib/prisma'

export default async function handler(req, res) {
  const commentId = parseInt(req.query.id)
  const { userId } = req.body

  if (!userId) {
    return res.status(400).json({ error: 'Missing userId' })
  }

  if (req.method === 'POST') {
    // Add like
    try {
      const like = await prisma.like.create({
        data: {
          userId,
          commentId,
        },
      })
      return res.status(201).json(like)
    } catch (error) {
      // Possibly unique constraint violation if already liked
      return res.status(400).json({ error: 'Already liked or invalid' })
    }
  } else if (req.method === 'DELETE') {
    // Remove like
    const like = await prisma.like.findFirst({
      where: {
        userId,
        commentId,
      },
    })
    if (!like) {
      return res.status(404).json({ error: 'Like not found' })
    }
    await prisma.like.delete({
      where: {
        id: like.id,
      },
    })
    res.status(204).end()
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
