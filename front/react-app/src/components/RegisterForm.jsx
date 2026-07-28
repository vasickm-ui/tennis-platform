import styles from '../styles/RegisterForm.module.css'
import { useState } from 'react';
import api from '../api/axios';

function RegisterForm({setIsRegister}) {

    const [registerFormData, setRegisterForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e) => {
    setRegisterForm({
        ...registerFormData,
        [e.target.name]: e.target.value
    });
}

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("SUBMIT CLICKED");
        if(registerFormData.password !== registerFormData.confirmPassword){
            alert("Passwords do not match!");
            return;
        }
        
        try {
            const response = await api.post("/users/register", {
                first_name: registerFormData.first_name,
                last_name: registerFormData.last_name,
                email: registerFormData.email,
                password: registerFormData.password
            });

            console.log(response.data);
            alert("Registration successful");
        } catch (error) {
            console.log(error.response?.data || error.message)
        }
    }

    return (
        <div className={styles.registerContainer}>
            <h2 className={styles.title}>REGISTER</h2>

            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    name="first_name"
                    type="text"
                    placeholder="First name"
                    onChange={handleChange}
                />

                <input
                    name="last_name"
                    type="text"
                    placeholder="Last name"
                    onChange={handleChange}
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                />

                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    onChange={handleChange}
                />

                <button type="submit">
                    REGISTER
                </button>

                <p>
                    Already have an account? 
                    <span className={styles.registerLink} onClick={() => setIsRegister(false)}>Login</span>
                </p>
            </form>
        </div>
    )
}



export default RegisterForm;