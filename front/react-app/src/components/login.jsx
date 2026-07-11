import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate()

    return (
        <div>
            <h2>Login</h2>

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