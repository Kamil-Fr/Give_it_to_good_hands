import "../scss/_homeMainView.scss";
import {Link as ScrollLink} from "react-scroll";
import decorationImage from "../assets/Decoration.svg";

function HomeMainView () {
return (
    <section className='main-view'>
        <div className='hero-photo'></div>
        <div className='hero-text'>
            <h2>Start helping!</h2>
            <h2>Put unwanted things in trusted hands</h2>
            <img src={decorationImage} alt="decoration pic" className='decorationImage'/>
            <div className='btns'>
                <ScrollLink
                    activeClass="active"
                    className="btn"
                    to="/login"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    GIVE YOUR<br/>ITEMS BACK
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
                    ORGANISE A<br/>COLLECTION
                </ScrollLink>

            </div>
        </div>
    </section>
)
}

export default HomeMainView