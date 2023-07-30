import Link from "next/link";
import Image from "next/image";
import styles from "./PostItem.module.css";

const PostItem = ({ post }) => {
    const imagePath = `/img/posts/${post.slug}/${post.image}`;
    const linkPath = `/posts/${post.slug}`;

    const postDate = new Date(post.date).toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    return (
        <li className={styles.post}>
            <Link href={linkPath}>
                <div>
                    <Image src={imagePath} alt={post.title}
                        width={300}
                        height={200}
                        layout="responsive"
                        className={styles.image} />
                </div>
                
                <div className={styles.content}>
                    <h3>{post.title}</h3>
                    <time>{postDate}</time>
                    <p>{post.excerpt}</p>
                </div>
            </Link>
        </li>
    )
}

export default PostItem