import { Link } from "react-router-dom";
import BackButton from "./backButton";
import HomeButton from "./HomeButton";

const OmniNav = () => {
    return (
        <nav className="OmniNav">
            <HomeButton />
            <Link to="/BlogAdd">Add a Blog Post</Link>
            <BackButton />
            <Link to={"/BlogDetailPage"}>Posts</Link>
        </nav>
    );
};

export default OmniNav;