import { useNavigate } from "react-router-dom";
import styles from '../styles/LoginForm.module.css'

function Login() {

    const navigate = useNavigate()

    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.title}>Login</h2>

            <form>
                <input 
                    type="email"
                    placeholder="Email"
                />

                <input 
                    type="password"
                    placeholder="Password"
                />

                <button onClick={() => navigate("/home")}>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login;