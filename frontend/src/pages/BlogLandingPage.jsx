import { useEffect, useState } from "react";
import BlogListItem from "../components/BlogListItem";
import { Link } from "react-router-dom";
import BackButton from "../components/backButton";

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
            <BackButton />
            {posts.map(post =>
                <BlogListItem title={post.title} picture={post.picture} />)}
            <Link to="/BlogAdd">Add a Blog Post</Link>
        </section>
    )
};

export default BlogLandingPage;