import Posts from "../../components/Posts/Posts";
import { getAllPosts } from "../../helpers/posts-util";

const PostsPage = ({ posts }) => {
    return (
        <Posts posts={posts} />
    )
}

export async function getStaticProps() {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts
        }
    }
}

export default PostsPage