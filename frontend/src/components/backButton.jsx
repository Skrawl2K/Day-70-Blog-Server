// To get back to previous url adress:
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => {
                navigate(-1);
            }}
        >
            Click me to go back!
        </button>
    );
};

export default BackButton