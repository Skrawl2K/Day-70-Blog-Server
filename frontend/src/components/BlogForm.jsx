import BackButton from "./backButton";
import HomeButton from "./HomeButton";

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
            <HomeButton />
            <BackButton />
            <form onSubmit={sendData}>
                <input type="text" name="title"></input>
                <input type="file" name="BlogPicture"></input>
                <input type="text" name="text" />
                <input type="text" name="name" />
                <input type="submit" value="Send" />
            </form>
        </>
    );
};

export default BlogForm;