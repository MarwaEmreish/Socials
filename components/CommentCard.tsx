"use client";

import { useState } from "react";

type CommentCardProps = {
  content: string;
  user: string;
  likedInitial?: boolean;
};

export default function CommentCard({ content, user, likedInitial = false }: CommentCardProps) {
  const [liked, setLiked] = useState(likedInitial);

  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
      <p className="text-gray-900 dark:text-gray-100 mb-2">{content}</p>
      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-300">
        <span>- {user}</span>
        <button
          onClick={() => setLiked(!liked)}
          className={`px-3 py-1 rounded-full text-white ${
            liked ? "bg-red-500" : "bg-gray-400 dark:bg-gray-600"
          } transition-colors duration-200`}
          aria-label={liked ? "Unlike comment" : "Like comment"}
        >
          {liked ? "❤️ Liked" : "♡ Like"}
        </button>
      </div>
    </div>
  );
}
