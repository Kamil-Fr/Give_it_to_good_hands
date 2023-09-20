import { useState } from "react";
import HomeHeader from "./HomeHeader";
import "../scss/_register.scss";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [password2Error, setPassword2Error] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePassword2Change = (e) => {
        setPassword2(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

       
        if (!email) {
            setEmailError("Pole email nie może być puste");
        } else if (!isValidEmail(email)) {
            setEmailError("Wprowadź poprawny adres email");
        } else {
            setEmailError("");
        }

        
        if (password.length < 6) {
            setPasswordError("Hasło musi mieć co najmniej 6 znaków");
        } else {
            setPasswordError("");
        }

     
        if (password2.length < 6) {
            setPassword2Error("Powtórzone hasło musi mieć co najmniej 6 znaków");
        } else if (password !== password2) {
            setPassword2Error("Hasło i powtórzone hasło nie są identyczne");
        } else {
            setPassword2Error("");
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
                <h2>Załóż konto</h2>
                <div className="decoration"> </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-fieldss">
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
                            <label htmlFor="password">Hasło</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <p className="error">{passwordError}</p>
                        </div>
                        <div className="single-field">
                            <label htmlFor="password2">Powtórz hasło</label>
                            <input
                                type="password"
                                name="password2"
                                value={password2}
                                onChange={handlePassword2Change}
                            />
                            <p className="error">{password2Error}</p>
                        </div>
                    </div>
                    <div className="form-buttons">
                        <button className="empty-button">Zaloguj się</button>
                        <button className="btn-reg">Załóż konto</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Register;
