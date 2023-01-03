import { useEffect, useState } from "react";
import BlogListItem from "../components/BlogListItem";

const BlogLandingPage = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('http://localhost:9095/BlogListItem')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <section>
            <h1>Welcome to THE Blog</h1>
            {posts.map(post =>
                <BlogListItem title={post.title} picture={post.picture} />)}
        </section>
    )
};

export default BlogLandingPage;