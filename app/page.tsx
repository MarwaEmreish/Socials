'use client'

import CommentCard from "../components/CommentCard"
import { useState } from "react"

export default function Home() {
  const [comments, setComments] = useState([
    { id: 1, content: "This is a great project! Loving Next.js.", user: "Alice" },
    { id: 2, content: "Really helpful tutorial, thanks for sharing.", user: "Bob" },
    { id: 3, content: "Looking forward to more features.", user: "Carol" }
  ])

  const [newComment, setNewComment] = useState("")

  const addComment = () => {
    if (newComment.trim()) {
      setComments(prev => [
        ...prev,
        { id: Date.now(), content: newComment.trim(), user: "Anonymous" }
      ])
      setNewComment("")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 py-10">
      <div className="w-full max-w-3xl bg-[#fdf3e7] dark:bg-gray-800 rounded-3xl shadow-2xl px-8 py-10 space-y-8">
        
        {/* App Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
          📝 Comment App
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
          A beginner-friendly place to share your thoughts.
        </p>

        {/* Comments List */}
        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
          {comments.map(comment => (
            <CommentCard key={comment.id} content={comment.content} user={comment.user} />
          ))}
        </div>

        {/* New Comment Input */}
        <div className="flex items-center space-x-2 pt-2 border-t border-gray-300 dark:border-gray-700">
          <input
            type="text"
            placeholder="Write a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 text-sm dark:text-white outline-none"
          />
          <button
            onClick={addComment}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  )
}
