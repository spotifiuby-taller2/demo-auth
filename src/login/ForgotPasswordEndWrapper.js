import {useNavigate} from "react-router-dom";
import {ForgotPasswordEnd} from "./ForgotPasswordEnd";

// useNavigate is a hook, and hooks cannot be used
// in class components.
const ForgotPasswordEndWrapper = (props) => {
    const navigate = useNavigate();

    return <ForgotPasswordEnd navigate={navigate} {...props} />
}

export default ForgotPasswordEndWrapper;