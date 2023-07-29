import Hero from "../components/Home/Hero";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import { getFeaturedPosts } from "../helpers/posts-util";
import Head from "next/head";

const HomePage = ({ posts }) => {
    return (
        <>
            <Head>
                <meta name="description" content="Postagens recentes feitas no blog." />
                <title>NextBlog &bull; Postagens Recentes</title>
            </Head>
            <Hero />
            <FeaturedPosts posts={posts} />
        </>  
    )
}

export async function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        }
    }
}

export default HomePage