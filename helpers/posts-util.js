import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function getPostData(filename) {
    const filePath = path.join(POSTS_DIR, filename);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const slug = filename.replace(/\.md$/, "");  // Removes the file extension
    const postData = {
        slug,
        ...data,
        content
    };

    return postData;
}

export function getAllPosts() {
    const posts = fs.readdirSync(POSTS_DIR);
    const allPosts = posts.map((post) => getPostData(post));
    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

    return sortedPosts;
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter((post) => post.isFeatured);

    return featuredPosts;
}