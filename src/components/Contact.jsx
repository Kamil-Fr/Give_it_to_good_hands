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
            newErrors.name = "The name field is required.";
        }

        if (name.trim().split(" ").length > 1) {
            newErrors.name = "The name cannot contain spaces.";
        }

        if (!email) {
            newErrors.email = "Email field is required.";
        } else {
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email)) {
                newErrors.email = "Incorrect e-mail address.";
            }
        }

        if (!message) {
            newErrors.message = "The message field is required.";
        } else if (message.length < 120) {
            newErrors.message = "The message must contain at least 120 characters.";
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
                                     setSuccessMessage("The form has been successfully submitted!");
                } else {
                                      const responseData = await response.json();
                    setErrorMessage(
                        `Błąd serwera: ${
                            responseData.errors ? responseData.errors[0] : "Unknown error."
                        }`
                    );
                }
            } catch (error) {
                                setErrorMessage("Error sending form: " + error.message);
            }
        }
    };

    return (
        <section id="contactForm">
            <div className="leftSideImage"></div>
            <div className="rightSideForm">
                <h1>Contact us</h1>
                <img src={decoration} alt="decoration" />
                {successMessage && <p className="success">{successMessage}</p>}
                {errorMessage && <p className="error">{errorMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <label>
                    Enter your name
                        <input type="text" placeholder="Chris" onChange={handleName} />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </label>
                    <label>
                    Enter your email
                        <input type="text" placeholder="xyz@xyz.com" onChange={handleEmail} />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </label>
                    <label>
                    Enter your message
                        <textarea
                            onChange={handleMessage}
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        ></textarea>
                        {errors.message && <p className="error">{errors.message}</p>}
                    </label>
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;

