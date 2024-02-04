import { useState } from "react";
import "../scss/_login.scss";
import HomeHeader from "./HomeHeader";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

       
        if (!email) {
            setEmailError("The email address provided is incorrect!");
        } else if (!isValidEmail(email)) {
            setEmailError("Please enter a valid email address");
        } else {
            setEmailError("");
        }

      
        if (password.length < 6) {
            setPasswordError("The password entered is too short!");
        } else {
            setPasswordError("");
        }

        
        if (!emailError && !passwordError) {
            
        }
    };

  
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <>
            <HomeHeader />
            <div className="main-login">
                <h2>Zaloguj się</h2>
                <div className="decoration"> </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-fields">
                        <div className="single-field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <p className="error">{emailError}</p>
                        </div>
                        <div className="single-field">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <p className="error">{passwordError}</p>
                        </div>
                    </div>
                    <div className="form-buttons">
                        <button className="empty-button" type="submit">
                            Log in
                        </button>
                        <button className="btn-reg">Create an account</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
