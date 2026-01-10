const tutorForm = document.getElementById("tutorLogin");

async function HandleTutorSubmission(event){
    event.preventDefault();

    const form = new FormData(tutorForm);

    if ( !form.get("email") && !form.get("password")){
        return;
    }

    const email = form.get("email");
    const password = form.get("password");

    try {
        const response = await fetch(`http://localhost:8080/api/Tutors/${email}/${password}`, {
            method: 'GET'
        });

        const output = await response.json();

        switch(response.status){
            case 500:
                alert(output.error || output.message);
                break;
            case 404: 
                alert(output.messsage);
                break;
            case 200:
                alert(output.message);
                window.location.replace("http://localhost:5501/EntryCode/Searchcourse.html");
                break;
            default: 
                alert("Network error from cors");
        }
    }
    catch(error){
        alert(error.message);
    }
}

tutorForm.addEventListener("submit", HandleTutorSubmission);