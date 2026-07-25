import { useNavigate } from "react-router-dom";
import styles from '../styles/LoginForm.module.css'

function LoginForm() {

    const navigate = useNavigate()

    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.title}>LOGIN</h2>

            <form className={styles.form}>
                <input 
                    type="email"
                    placeholder="Email"
                />

                <input 
                    type="password"
                    placeholder="Password"
                />

                <button onClick={() => navigate("/home")}>
                    LOGIN
                </button>
            </form>
        </div>
    )
}

export default LoginForm;