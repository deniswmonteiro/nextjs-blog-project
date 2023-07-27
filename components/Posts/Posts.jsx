import PostsGrid from "./PostsGrid";
import styles from "./Posts.module.css";

const Posts = ({ posts }) => {
    return (
        <section className={styles.posts}>
            <h1>Todas as Postagens</h1>

            <PostsGrid posts={posts} />
        </section>
    )
}

export default Posts