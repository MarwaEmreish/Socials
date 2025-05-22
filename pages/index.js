import { useState, useEffect } from 'react'

export default function Home() {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/comments')
      .then(res => res.json())
      .then(data => {
        setComments(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading...</p>

  return (
    <div>
      <h1>Comments</h1>
      {comments.map(c => (
        <div key={c.id} style={{ border: '1px solid #ccc', marginBottom: 10, padding: 10 }}>
          <img
            src={c.user.image || '/default-avatar.png'}
            alt={c.user.name}
            width={40}
            height={40}
            style={{ borderRadius: '50%' }}
          />
          <strong>{c.user.name}</strong>
          <p>{c.content}</p>
          <p>Likes: {c.likes.length}</p>
        </div>
      ))}
    </div>
  )
}
