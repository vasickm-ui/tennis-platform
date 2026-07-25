import LoginForm from '../components/LoginForm'
import styles from '../styles/LoginPage.module.css'

function LoginPage() {
    console.log("LoginPage rendered!")
    return (
        <div className={styles.page}>
            <LoginForm />
        </div>
    )
}

export default LoginPage;