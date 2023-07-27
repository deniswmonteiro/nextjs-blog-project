import Hero from "../components/Home/Hero";
import FeaturedPosts from "../components/Home/FeaturedPosts";

const DUMMY_POSTS = [
    {
        slug: "getting-started-with-nextjs-1",
        title: "Getting Started with NextJS",
        image: "getting-started-nextjs.png",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis dictum leo.",
        date: "2023-07-27",
    }
];

const HomePage = () => {
    return (
        <>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </>  
    )
}

export default HomePage