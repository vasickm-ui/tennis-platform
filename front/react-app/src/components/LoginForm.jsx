import { useNavigate } from "react-router-dom";
import styles from '../styles/LoginForm.module.css';
import api from "../api/axios";

function LoginForm({setIsRegister}) {

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()




    }

    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.title}>LOGIN</h2>

            <form className={styles.form}>
                <input 
                    type="email"
                    placeholder="Email"
                    name="email"
                />

                <input 
                    type="password"
                    placeholder="Password"
                    name="password"
                />

                <button onClick={() => navigate("/home")}>
                    LOGIN
                </button>

                <p>
                    Don't have an account? 
                    <span className={styles.registerLink} onClick={() => setIsRegister(true)}>Register</span>
                </p>
            </form>
        </div>
    )
}

export default LoginForm;