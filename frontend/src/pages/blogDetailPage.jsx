import { useEffect, useState } from "react";
import BackButton from "../components/backButton";
import BlogListItem from "../components/BlogListItem";
import HomeButton from "../components/HomeButton";

const BlogDetailPage = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('http://localhost:9095/BlogListItem')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <>
            <HomeButton />
            <BackButton />
            <section>

                {posts.map(posts =>
                    <BlogListItem title={posts.title} picture={posts.picture} text={posts.text} name={posts.name} />)}
            </section>
        </>
    )
};

export default BlogDetailPage;