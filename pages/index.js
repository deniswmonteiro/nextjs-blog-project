import Hero from "../components/Home/Hero";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import { getFeaturedPosts } from "../helpers/posts-util";

const HomePage = ({ posts }) => {
    return (
        <>
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