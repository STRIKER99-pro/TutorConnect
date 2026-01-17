import { useNavigate } from "react-router-dom";

import React, { useState } from "react";
function Content() {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        });

        const navigate = useNavigate();

        const [loading, setLoading] = useState(false)
        const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true)
        setError('');
        alert('success')

        if(!formData.name && !formData.email && !formData.password){
            alert('Please fill in all the fields');
            return;
        }
        if(formData.password !== formData.confirmPassword){
            alert('Password do not match')
            return;
        }

        const data = {
            username: formData.name,
            email: formData.email,
            password: formData.password
        }
        
        // perform post request to backend to create new user
        try {
            const response = await fetch(`http://localhost:8080/api/Students/sign-up`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            
            
            switch(response.status){
                case 200:
                    alert('User created successfully');
                    // redirection to select course should be done here ( Arthur this is your part )
                    navigate("/Search");
                    break;
                case 500:
                    setError('Server error. Please try again later.');
                    break;
                default: 
                    setError('A Network connectivity error occured. Please try again later.');
            }
        } catch (error) {
            setError(`message : ${error.message}`);
        }
    }

    return (
       <React.Fragment>
            <form action="POST" className="sign-up-form" onSubmit={handleSubmit}>
                <div>
                <input type="text" 
                className="input-name" 
                placeholder="Enter Name"
                name="name"
                onChange={handleChange}
                required
                />
                </div>
                <input type="email" 
                className="input-email"
                name="email"
                placeholder="Enter Email"
                onChange={handleChange}
                required
                />
                 <input type="password" 
                 className="input-password"
                 placeholder="Enter Password"
                 name="password"
                 required
                />
                  <input type="password"
                  className="confirm-password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  required
                />
            <button
            type="submit"
            >
                    SignUp
            </button>
            </form>
       </React.Fragment>
    )
}

export default Content;