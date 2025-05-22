import Image from "next/image";
import CommentCard from "../components/CommentCard";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <main className="flex flex-col items-center p-8 space-y-6">
        {/* Existing content */}
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
          className="dark:invert"
        />
        <ol className="list-decimal list-inside space-y-2 text-lg max-w-xl">
          <li>
            Get started by editing{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
              app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex space-x-4">
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            <Image src="/vercel.svg" alt="Vercel logomark" width={20} height={20} />
            <span>Deploy now</span>
          </a>

          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            Read our docs
          </a>
        </div>

        {/* Add comments here */}
        <section className="w-full max-w-2xl mt-10">
          <h2 className="text-2xl mb-4 font-semibold">Comments</h2>

          <CommentCard content="This is a great project! Loving Next.js." user="Alice" />
          <CommentCard content="Really helpful tutorial, thanks for sharing." user="Bob" likedInitial={true} />
          <CommentCard content="Looking forward to more features." user="Carol" />
        </section>
      </main>

      <footer className="flex justify-center space-x-8 p-6 border-t border-gray-200 dark:border-gray-700 text-sm">
        {/* footer content unchanged */}
      </footer>
    </div>
  );
}
