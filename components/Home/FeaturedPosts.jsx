import PostsGrid from "../Posts/PostsGrid";
import styles from "./FeaturedPosts.module.css";

const FeaturedPosts = ({ posts }) => {
    return (
        <section className={styles.latest}>
            <h2>Postagens Recentes</h2>
            
            <PostsGrid posts={posts} />
        </section>
    )
}

export default FeaturedPosts