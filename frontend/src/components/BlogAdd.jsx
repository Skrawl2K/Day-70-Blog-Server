import { useState } from "react"
import BackButton from "./backButton";
import HomeButton from "./HomeButton";
import OmniNav from "./OmniNav";

const BlogAdd = ({ setPosts }) => {
    const [title, setTitle] = useState("")
    const [blogPicture, setBlogPicture] = useState(null)
    const [text, setText] = useState("")
    const [name, setName] = useState("")

    const sendData = () => {
        const form = new FormData()
        form.append('title', title)
        form.append('BlogPicture', blogPicture)
        form.append('text', text)
        form.append('name', name)

        fetch('http://localhost:9095/newPost', {
            method: 'POST',
            body: form
        })
            .then(response => response.json())
            .then(data => setPosts(data))
    };
    return (
        <section>
            <OmniNav />
            <h2>Add a blog post</h2>
            <input type="text" name="title" placeholder="Title" onChange={e => setTitle(e.target.value)} />
            <input type="text" name="text" placeholder="here goes your text" onChange={e => setText(e.target.value)} />
            <div>
                <input type="file" name="BlogPicture" onChange={e => setBlogPicture(e.target.files[0])} />
            </div>
            <input type="name" name="name" placeholder="Username" onChange={e => setName(e.target.value)} />
            <br />
            <button onClick={sendData}>Publish</button>
        </section >
    );
};

export default BlogAdd;