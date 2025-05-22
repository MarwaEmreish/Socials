'use client'

import { useState } from "react"
import CommentCard from "../components/CommentCard"

export default function Home() {
  const [comments, setComments] = useState([
    { id: 1, content: "This is a great project! Loving Next.js.", user: "Alice" },
    { id: 2, content: "Really helpful tutorial, thanks for sharing.", user: "Bob" },
    { id: 3, content: "Looking forward to more features.", user: "Carol" }
  ])
  const [newComment, setNewComment] = useState("")
  const [userName, setUserName] = useState("")

  const addComment = () => {
    if (newComment.trim()) {
      setComments(prev => [
        ...prev,
        {
          id: Date.now(),
          content: newComment.trim(),
          user: userName.trim() || "Anonymous"
        }
      ])
      setNewComment("")
      setUserName("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f5f2] to-[#f0eae6] flex items-center justify-center px-4 sm:px-6 md:px-10 py-10">

      <div className="bg-[#fffaf7] border border-[#e8ddd2] rounded-2xl shadow-lg w-full max-w-xl mx-6 my-10 px-6 py-8 sm:px-10 space-y-6">

        {/* Header */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold text-gray-800">💬 Comment App</h1>
          <p className="text-sm text-gray-500">Join the conversation</p>
        </div>

        {/* Comments */}
        <div className="space-y-4 max-h-60 overflow-y-auto pr-1">
          {comments.map((comment) => (
            <CommentCard key={comment.id} content={comment.content} user={comment.user} />
          ))}
        </div>

        {/* New Comment Form */}
        <div className="space-y-4 pt-4 border-t border-gray-200">
          <input
            type="text"
            placeholder="Your name (optional)"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-300"
          />
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
            <button
              onClick={addComment}
              className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
