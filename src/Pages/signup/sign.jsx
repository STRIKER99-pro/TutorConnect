import { useNavigate } from "react-router-dom"

const Sign = () =>{
    const navigate = useNavigate();

    function HandleLoginRedirection(){
        navigate("/StudentLogin");
    }
    function HandleTutorLoginRedirection(){
        navigate("/TutorLogin");
    }

    function HandleSignUpRedirection(){
        navigate("/TutorSignUp")
    }

    return (
        <div className="login-directives">
            <p>Are You A Tutor?<a href="#" onClick={HandleSignUpRedirection}> SignUp</a></p>
            <p>Already Have An Account? <a href="#" onClick={HandleLoginRedirection}>LogIn</a></p>
            <p>Are You A Tutor? <a href="#" onClick={HandleTutorLoginRedirection}>Tutor LogIn</a></p>
        </div>
    )
}

export default Sign;