import PostContent from "../../components/Posts/Post/PostContent"
import { getPostData, getPostsFiles } from "../../helpers/posts-util";

const PostPage = ({ post }) => {
    return (
        <PostContent post={post} />
    )
}

export async function getStaticProps(context) {
    const {params} = context;
    const {postSlug} = params;
    const post = getPostData(postSlug);

    return {
        props: {
            post: post
        },
        revalidate: 600
    }
}

export async function getStaticPaths() {
    const posts = getPostsFiles();
    const slugs = posts.map((post) => post.replace(/\.md$/, ""));

    return {
        paths: slugs.map((slug) => ({ params: { postSlug: slug } })),
        fallback: false
    }
}

export default PostPage