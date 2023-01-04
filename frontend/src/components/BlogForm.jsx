import BackButton from "./backButton";
import HomeButton from "./HomeButton";
import OmniNav from "./OmniNav";

const BlogForm = (props) => {
    const sendData = (e) => {
        e.preventDefaul()
        const form = new FormData(e.target);
        fetch('http://localhost:9095/newPost', {
            method: 'POST',
            body: form
        })
            .then(response => response.json())
            .then(data => props.setPosts(data))
    };
    return (
        <>
            <OmniNav />
            <form onSubmit={sendData}>
                <input type="text" name="title" />
                <input type="file" name="BlogPicture" />
                <input type="text" name="text" />
                <input type="name" name="name" />
                <input type="submit" value="Send" />
            </form>
        </>
    );
};

export default BlogForm;