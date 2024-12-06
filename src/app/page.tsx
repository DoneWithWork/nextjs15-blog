import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function Home() {
  const posts = getAllPosts();
  return (
    <div className="h-screen">
      <ul className="flex flex-col gap-10 w-full items-center">
        {posts.map((post, index) => (
          <li key={post.slug} className="w-full max-w-xl">
            <Link
              className="font-semibold text-xl hover:underline hover:text-blue-500"
              href={`/posts/${post.slug}`}
            >
              {index + 1}. {post.title}
            </Link>
            <p className="text-sm text-gray-300 my-1">
              {new Date(post.date).toDateString()}
            </p>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
