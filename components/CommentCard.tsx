"use client";
import { useState } from "react";

type CommentCardProps = {
  content: string;
  user: string;
};

export default function CommentCard({ content, user }: CommentCardProps) {
  const [reactions, setReactions] = useState({
    like: 0,
    love: 0,
    laugh: 0,
  });

  const handleReaction = (type: keyof typeof reactions) => {
    setReactions((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  return (
    <div className="bg-white border border-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
      <p className="text-gray-900 dark:text-gray-100 mb-2">{content}</p>
      <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">– {user || "Anonymous"}</div>

      <div className="flex gap-4">
        {[
          { emoji: "👍", label: "like" },
          { emoji: "❤️", label: "love" },
          { emoji: "😂", label: "laugh" },
        ].map((reaction) => (
          <button
            key={reaction.label}
            onClick={() => handleReaction(reaction.label as keyof typeof reactions)}
            className="flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
          >
            <span className="text-lg">{reaction.emoji}</span>
            <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
              {reactions[reaction.label as keyof typeof reactions]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
