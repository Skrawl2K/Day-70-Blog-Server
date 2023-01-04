import { useEffect, useState } from "react";
import BackButton from "../components/backButton";
import BlogListItem from "../components/BlogListItem";
import HomeButton from "../components/HomeButton";
import OmniNav from "../components/OmniNav";

const BlogDetailPage = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('http://localhost:9095/newPost')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <>

            <div>
                <OmniNav />
                <section>

                    {posts.map(posts =>
                        <BlogListItem title={posts.title} picture={posts.picture} text={posts.text} name={posts.name} />)}
                </section>
            </div>
        </>
    )
};

export default BlogDetailPage;