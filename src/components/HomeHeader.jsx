import "../scss/_header.scss";
import {Link} from "react-router-dom";


function HomeHeader() {
    return (
        <nav className="header">
            <ul className="navigation-login">
                <li>
                    <Link to="/logowanie">Zaloguj</Link>
                    <Link to="/rejestracja">Załóż konto</Link>
                </li>
            </ul>
            <ul className="navigation">
                <li>
                    <Link to="/">Start</Link>
                    <Link to="/">O co chodzi?</Link>
                    <Link to="/">O nas</Link>
                    <Link to="/">Fundacja i organizacje</Link>
                    <Link to="/">Kontakt</Link>
                </li>
            </ul>
        </nav>
    );
}

export default HomeHeader;