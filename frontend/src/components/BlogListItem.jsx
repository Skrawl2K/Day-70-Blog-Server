import { Link } from "react-router-dom";
import BackButton from "./backButton";
import HomeButton from "./HomeButton";

const BlogListItem = (props) => {
    return (
        <>
            <div>
                <h2>{props.title}</h2>
                <img src={`http://localhost:9095/${props.picture}`} alt={props.title} />
                <p>{props.text}</p>
                <p>{props.name}</p>
                <Link to={"/BlogDetailPage"} />
            </div>
        </>
    )
};

export default BlogListItem;