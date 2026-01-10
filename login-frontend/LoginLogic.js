const loginForm = document.getElementById("LoginForm");


async function HandleStudentSubmission(event) {
    event.preventDefault();

    // getting form data 
    const Form = new FormData(loginForm);

    if ( !Form.get("email") && !Form.get("password")){
        return;
    }
    
    // creating and sending data object for email verification 
    const data = {
        email: Form.get("email"),
        password: Form.get("password")
    }
    try {
        const response = await fetch(`http://localhost:8080/api/Students/${data.email}/${data.password}`, {
            method: "GET"
        });

        // Parse JSON response body
        const output = await response.json();

        switch(response.status){
            case 500:
                alert(output.error || output.message);
                break;
            case 404:
                alert(output.message);
                break;
            case 200:
                window.location.replace("http://localhost:5501/EntryCode/Searchcourse.html");
                break;
            default:
                alert("Unexpected error occurred");
        }
    } catch(error) {
        alert("Network error: " + error.message);
    }
  
};

// Attach event listener to form submit
loginForm.addEventListener("submit", HandleStudentSubmission);