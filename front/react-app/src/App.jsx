import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import Home from "./pages/Home"


function App() {

    return (
        <Routes>

            <Route 
                path="/" 
                element={<LoginPage />}
            />
        </Routes>

    );
}


export default App;