import "../scss/_homeMainView.scss";
import {Link as ScrollLink} from "react-scroll";
import decorationImage from "../assets/Decoration.svg";

function HomeMainView () {
return (
    <section className='main-view'>
        <div className='hero-photo'></div>
        <div className='hero-text'>
            <h2>Zacznij pomagać!</h2>
            <h2>Oddaj niechciane rzeczy w zaufane ręce</h2>
            <img src={decorationImage} alt="decoration pic" className='decorationImage'/>
            <div className='btns'>
                <ScrollLink
                    activeClass="active"
                    className="btn"
                    to="/logowanie"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    ODDAJ<br/>RZECZY
                </ScrollLink>
                <ScrollLink
                    activeClass="active"
                    className="btn"
                    to="/logowanie"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    ZORGANIZUJ<br/>ZBIÓRKĘ
                </ScrollLink>

            </div>
        </div>
    </section>
)
}

export default HomeMainView