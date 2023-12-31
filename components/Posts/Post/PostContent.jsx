import PostHeader from "./PostHeader";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import styles from "./PostContent.module.css";

SyntaxHighlighter.registerLanguage("js", js);

const PostContent = ({ post }) => {
    const imagePath = `/img/posts/${post.slug}/${post.image}`;

    const customRenderers = {
        p(paragraph) {
            const {node} = paragraph;

            if (node.children[0].tagName === "img") {
                const image = node.children[0];

                return (
                    <div className={styles.image}>
                        <Image src={`/img/posts/${post.slug}/${image.properties.src}`}
                            alt={image.properties.alt}
                            width={600}
                            height={300} />
                    </div>
                )
            }

            return <p>{paragraph.children}</p>
        },

        code(code) {
            const {className, children} = code;
            const language = className.split("-")[1];

            return (
                <SyntaxHighlighter style={atomDark}
                    language={language}
                    children={children} />
            )
        }
    }

    return (
        <article className={styles.content}>
            <PostHeader title={post.title} image={imagePath} />

            <ReactMarkdown components={customRenderers}>
                {post.content}
            </ReactMarkdown>
        </article>
    )
}

export default PostContent