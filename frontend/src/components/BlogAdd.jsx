import { useState } from "react"

const BlogAdd = ({ setPosts }) => {
    const [title, setTitle] = useState("")
    const [blogPicture, setBlogPicture] = useState(null)

    const sendData = () => {
        const form = new FormData()
        form.append('title', title)
    }
}