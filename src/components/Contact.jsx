import { useState } from "react";
import "../scss/_contactFooter.scss";
import decoration from "../assets/Decoration.svg";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleName = (event) => {
        setName(event.target.value);
    };
    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handleMessage = (event) => {
        setMessage(event.target.value);
    };

    const validateForm = () => {
        const newErrors = {};

        if (!name) {
            newErrors.name = "Pole imienia jest wymagane.";
        }

        if (name.trim().split(" ").length > 1) {
            newErrors.name = "Imię nie może zawierać spacji.";
        }

        if (!email) {
            newErrors.email = "Pole email jest wymagane.";
        } else {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email)) {
                newErrors.email = "Nieprawidłowy adres email.";
            }
        }

        if (!message) {
            newErrors.message = "Pole wiadomości jest wymagane.";
        } else if (message.length < 120) {
            newErrors.message = "Wiadomość musi zawierać co najmniej 120 znaków.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isValid = validateForm();

        if (isValid) {
            const form = {
                name: name,
                email: email,
                message: message,
            };

            try {
                const API = "https://fer-api.coderslab.pl/v1/portfolio";
                const response = await fetch(`${API}/contact`, {
                    method: "POST",
                    body: JSON.stringify(form),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (response.status === 200) {
                                     setSuccessMessage("Formularz został wysłany poprawnie!");
                } else {
                                      const responseData = await response.json();
                    setErrorMessage(
                        `Błąd serwera: ${
                            responseData.errors ? responseData.errors[0] : "Nieznany błąd."
                        }`
                    );
                }
            } catch (error) {
                                setErrorMessage("Błąd podczas wysyłania formularza: " + error.message);
            }
        }
    };

    return (
        <section id="contactForm">
            <div className="leftSideImage"></div>
            <div className="rightSideForm">
                <h1>Skontaktuj się z nami</h1>
                <img src={decoration} alt="decoration" />
                {successMessage && <p className="success">{successMessage}</p>}
                {errorMessage && <p className="error">{errorMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <label>
                        Wpisz swoje imię
                        <input type="text" placeholder="Krzysztof" onChange={handleName} />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </label>
                    <label>
                        Wpisz swój email
                        <input type="text" placeholder="xyz@xyz.pl" onChange={handleEmail} />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </label>
                    <label>
                        Wpisz swoją wiadomość
                        <textarea
                            onChange={handleMessage}
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        ></textarea>
                        {errors.message && <p className="error">{errors.message}</p>}
                    </label>
                    <button type="submit">Wyślij</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;

