import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export function getPostsFiles() {
    return fs.readdirSync(POSTS_DIR);
}

export function getPostData(postId) {
    const slug = postId.replace(/\.md$/, "");  // Removes the file extension
    const filePath = path.join(POSTS_DIR, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const postData = {
        slug,
        ...data,
        content
    };

    return postData;
}

export function getAllPosts() {
    const posts = getPostsFiles();
    const allPosts = posts.map((post) => getPostData(post));
    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

    return sortedPosts;
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter((post) => post.isFeatured);

    return featuredPosts;
}