import prisma from '../../../lib/prisma'

export default async function handler(req, res) {
  const { id } = req.query
  if (req.method === 'GET') {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
      include: { comments: true, likes: true },
    })
    return res.json(user)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
