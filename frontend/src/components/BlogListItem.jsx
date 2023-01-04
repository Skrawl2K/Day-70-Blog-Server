import { Link } from "react-router-dom";
import BackButton from "./backButton";
import HomeButton from "./HomeButton";
import OmniNav from "./OmniNav";

const BlogListItem = (props) => {
    return (

        <>
            <div className="FormBody">
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