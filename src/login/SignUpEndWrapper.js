import {useNavigate} from "react-router-dom";
import {SignUpEnd} from "./SignUpEnd";

// useNavigate is a hook, and hooks cannot be used
// in class components.
const SignUpEndWrapper = (props) => {
    const navigate = useNavigate();

    return <SignUpEnd navigate={navigate} {...props} />
}

export default SignUpEndWrapper;
