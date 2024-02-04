import "../scss/_header.scss";
import {Link} from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll';



function HomeHeader() {
    return (
        <div className="container" id="homeHeader">
            <nav>
                <ul className="navigation">
                    <li className="logIn">
                    <Link to="/login">Log in</Link>
                        </li>
                        <li className="signUp">
                    <Link to="/register">Create an account</Link>
                </li>
                </ul>
            </nav>
            <nav>
                <ul className="navigation">
                <li className="nav-links">
                    <Link
                        to="/"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        Start
                    </Link>
                </li>
                    <li className="nav-links">
                    <ScrollLink
                        to="threeColumns"
                        spy={true}
                        smooth={true}
                        offset={50}
                        duration={500}
                    >
                        What's the matter?
                    </ScrollLink>
                    </li>
                    <li className="nav-links">
                    <ScrollLink to="aboutUs"
                                spy={true}
                                smooth={true}
                                offset={50}
                          duration={500}
                    >
                        About us
                    </ScrollLink>
                    </li>
                    <li className="nav-links">
                    <ScrollLink to="whoWeHelp"
                                spy={true}
                                smooth={true}
                                offset={50}
                          duration={500}
                    >
                        Foundation and organizations
                    </ScrollLink>
                    </li>
                    <li className="nav-links">
                    <ScrollLink to="contactForm"
                                spy={true}
                                smooth={true}
                                offset={50}
                          duration={500}
                    >
                        Contact
                    </ScrollLink>
                </li>
            </ul>
        </nav>
        </div>
    );
}

export default HomeHeader;