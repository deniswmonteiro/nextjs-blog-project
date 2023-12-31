import PostItem from "./PostItem";
import styles from "./PostsGrid.module.css";

const PostsGrid = ({ posts }) => {
    return (
        <ul className={styles.grid}>
            {posts && posts.map((post) => <PostItem key={post.slug} post={post} />)}
        </ul>
    )
}

export default PostsGrid