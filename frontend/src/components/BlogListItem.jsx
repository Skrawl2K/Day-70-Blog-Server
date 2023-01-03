const BlogListItem = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <img src={'http://localhost:9295/${props.picture}'} alt={props.title} />
            <p>{props.text}</p>
            <p>{props.name}</p>
        </div>
    )
};

export default BlogListItem;