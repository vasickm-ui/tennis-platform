import styles from '../styles/RegisterForm.module.css'

function RegisterForm() {

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
            </form>
        </div>
    )
}

export default RegisterForm;