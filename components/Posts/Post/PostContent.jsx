import PostHeader from "./PostHeader";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import styles from "./PostContent.module.css";

const DUMMY_POST = {
    slug: "getting-started-with-nextjs-1",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    content: "# Essa é uma postagem",
    date: "2023-07-27",
};

const PostContent = () => {
    const imagePath = `/img/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

    return (
        <article className={styles.content}>
            <PostHeader title={DUMMY_POST.title} image={imagePath} />

            <ReactMarkdown>
                {DUMMY_POST.content}
            </ReactMarkdown>
        </article>
    )
}

export default PostContent