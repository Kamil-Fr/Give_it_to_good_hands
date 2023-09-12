import "../scss/_header.scss";
import {Link} from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll';


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
                    <Link
                        to="/"
                         smooth={true}
                        duration={500}
                    >
                        Start
                    </Link>
                    <ScrollLink
                        to="treecolumns"
                        smooth={true}
                        duration={500}
                    >
                        O co chodzi?
                    </ScrollLink>
                    <ScrollLink to="aboutus"
                          smooth={true}
                          duration={500}
                    >
                        O nas
                    </ScrollLink>
                    <ScrollLink to="organizations"
                          smooth={true}
                          duration={500}
                    >
                        Fundacja i organizacje
                    </ScrollLink>
                    <ScrollLink to="contact"
                          smooth={true}
                          duration={500}
                    >
                        Kontakt
                    </ScrollLink>
                </li>
            </ul>
        </nav>
    );
}

export default HomeHeader;