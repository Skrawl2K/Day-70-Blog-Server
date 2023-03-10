import { useState } from "react"

const BlogAdd = ({ setPosts }) => {
    const [title, setTitle] = useState("")
    const [blogPicture, setBlogPicture] = useState(null)
    const [text, setText] = useState("")
    const [name, setName] = useState("")

    const sendData = () => {
        const form = new FormData()
        form.append('title', title)
        form.append('blogPicture', blogPicture)
        form.append('text', text)
        form.append('name', text)

        fetch('http://localhost:9095/newPost', {
            method: 'POST',
            body: form
        })
            .then(response => response.json())
            .then(data => setPosts(data))
    };
    return (
        <section>
            <h2>Add a Blog post</h2>
            <input type="text" name="title" placeholder="Title" onChange={e => setTitle(e.target.value)} />
            <input type="text" name="text" placeholder="here goes your text" onChange={e => setText(e.target.value)} />
            <div>
                <input type="file" name="blogPicture" onChange={e => setBlogPicture(e.target.files[0])} />
            </div>
            <input type="text" name="name" placeholder="Username" onChange={e => setText(e.target.value)} />
            <br />
            <button onClick={sendData}>Publish</button>
        </section >
    );
};

export default BlogAdd;