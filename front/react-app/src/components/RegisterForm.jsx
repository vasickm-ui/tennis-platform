import styles from '../styles/RegisterForm.module.css'
import { useState } from 'react';
import api from '../api/axios';
import registerSchema from "../validation/registerSchema";

function RegisterForm({setIsRegister}) {

    const [registerFormData, setRegisterForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
    setRegisterForm({
        ...registerFormData,
        [e.target.name]: e.target.value
    });

    setErrors({
        ...errors,
        [e.target.name]:""
    })
}

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(registerFormData.password !== registerFormData.confirmPassword){
            alert("Passwords do not match!");
            return;
        }
        
        try {

            setErrors({});

            await registerSchema.validate(registerFormData,{abortEarly: false});

            const response = await api.post("/users/register", {
                first_name: registerFormData.first_name,
                last_name: registerFormData.last_name,
                email: registerFormData.email,
                password: registerFormData.password
            });

            console.log(response.data);
            alert("Registration successful");
        } catch (error) {
            if (error.name === "ValidationError") {

                const validationErrors = {};

                error.inner.forEach((err) => {
                    validationErrors[err.path] = err.message;
                });

                setErrors(validationErrors);
                return;
            }

            console.log(error.response?.data || error.message);
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
                {errors.first_name && (
                    <p className={styles.error}>{errors.first_name}</p>
                )}

                <input
                    name="last_name"
                    type="text"
                    placeholder="Last name"
                    onChange={handleChange}
                />
                {errors.last_name && (
                    <p className={styles.error}>{errors.last_name}</p>
                )}

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
                {errors.email && (
                    <p className={styles.error}>{errors.email}</p>
                )}

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                {errors.password && (
                    <p className={styles.error}>{errors.password}</p>
                )}

                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    onChange={handleChange}
                />
                {errors.confirmPassword && (
                    <p className={styles.error}>{errors.confirmPassword}</p>
                )}

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