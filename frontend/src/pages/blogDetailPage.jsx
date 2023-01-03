import { useEffect, useState } from "react";
import BackButton from "../components/backButton";
import BlogListItem from "../components/BlogListItem";

const blogDetailPage = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('http://localhost:9095/BlogListItem')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <section>
            <BackButton />
            {posts.map(post =>
                <BlogListItem title={post.title} picture={post.picture} text={post.text} name={post.name} />)}
        </section>
    )
};

export default blogDetailPage;