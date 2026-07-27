import { useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import styles from '../styles/LoginPage.module.css'

function LoginPage() {
    const [isRegister, setIsRegister] = useState(false);

    return (
        <div className={styles.page}>
            {
                isRegister
                ? <RegisterForm/>
                : <LoginForm setIsRegister={setIsRegister}/>
            }
        </div>
    )
}

export default LoginPage;