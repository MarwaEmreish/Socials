export default function CommentCard({
  content,
  user,
}: {
  content: string;
  user: string;
}) {
  return (
    <div className="bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white p-4 rounded-xl shadow mb-4">
      <p className="text-base">{content}</p>
      <span className="text-xs text-gray-500">— {user}</span>
    </div>
  );
}
