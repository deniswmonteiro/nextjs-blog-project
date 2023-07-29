import Head from "next/head";
import Posts from "../../components/Posts/Posts";
import { getAllPosts } from "../../helpers/posts-util";

const PostsPage = ({ posts }) => {
    return (
        <>
            <Head>
                <meta name="description" content="Todas as postagens feitas no blog." />
                <title>NextBlog &bull; Todas as Postagens</title>
            </Head>
            <Posts posts={posts} />
        </>
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