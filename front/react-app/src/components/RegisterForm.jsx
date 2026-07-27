import styles from '../styles/RegisterForm.module.css'

function RegisterForm({setIsRegister}) {

    return (
        <div className={styles.registerContainer}>
            <h2 className={styles.title}>REGISTER</h2>

            <form className={styles.form}>
                <input
                    type="text"
                    placeholder="First name"
                />

                <input
                    type="text"
                    placeholder="Last name"
                />

                <input
                    type="email"
                    placeholder="Email"
                />

                <input
                    type="password"
                    placeholder="Password"
                />

                <input
                    type="password"
                    placeholder="Confirm password"
                />

                <button>
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