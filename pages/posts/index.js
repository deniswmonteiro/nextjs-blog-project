import Posts from "../../components/Posts/Posts";

const DUMMY_POSTS = [
    {
        slug: "getting-started-with-nextjs-1",
        title: "Getting Started with NextJS",
        image: "getting-started-nextjs.png",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis dictum leo.",
        date: "2023-07-27",
    },
    {
        slug: "getting-started-with-nextjs-2",
        title: "Getting Started with NextJS",
        image: "getting-started-nextjs.png",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis dictum leo.",
        date: "2023-07-27",
    },
    {
        slug: "getting-started-with-nextjs-3",
        title: "Getting Started with NextJS",
        image: "getting-started-nextjs.png",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis dictum leo.",
        date: "2023-07-27",
    },
    {
        slug: "getting-started-with-nextjs-4",
        title: "Getting Started with NextJS",
        image: "getting-started-nextjs.png",
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis dictum leo.",
        date: "2023-07-27",
    }
];

const PostsPage = () => {
    return (
        <Posts posts={DUMMY_POSTS} />
    )
}

export default PostsPage