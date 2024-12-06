import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types/post";

const postsDir = path.join(process.cwd(), "src/posts");

export const getAllPosts = () => {
  const fileNames = fs.readdirSync(postsDir);
  return fileNames.map((fileName: string) => {
    // genereate a human friendly url
    const slug = fileName.replace(/\.md$/, "");
    const filePath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents); //grabs the frontmatter from the text file

    const post: Post = {
      slug,
      content,
      title: data.title,
      description: data.description,
      author: data.author,
      date: data.date,
      tags: data.tags,
      category: data.category,
    };
    return post;
  });
};
