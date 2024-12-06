import { getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import MarkdownIt from "markdown-it";
const md = new MarkdownIt();

async function fetchPost(slug: string) {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await fetchPost(slug);

  if (!post) {
    notFound();
  }
  const htmlConvertor = md.render(post.content);
  return (
    <article className="max-w-[1200px] mx-auto mt-5">
      <h1 className="my-2 font-semibold text-4xl">{post.title}</h1>
      <p className="text-gray-300 my-2">{new Date(post.date).toDateString()}</p>
      <div className="my-4 flex flex-row items-center flex-wrap gap-3">
        {post.tags.map((tag, index) => (
          <p key={index} className="mx-2 bg-gray-800 px-4 py-1 rounded-xl">
            {tag}
          </p>
        ))}
      </div>
      <div
        className="mt-10 mb-10 prose lg:prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: htmlConvertor }}
      ></div>
    </article>
  );
}
