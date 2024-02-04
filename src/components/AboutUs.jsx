import "../scss/_aboutUs.scss";
import decoration from "../assets/Decoration.svg"
import signature from "../assets/Signature.svg"

function AboutUs() {

    return (
        <section id="aboutUs" className="aboutUs">
            <div className="leftSideAboutUs">
                <h1>About us</h1>
                <img src={decoration} alt="decoration"/>
                <p>The creators of the website dedicated to facilitating the donation of unwanted items are passionate individuals committed to fostering a culture of reuse and reducing waste in our communities.</p>
                <p>Motivated by a shared vision of creating a platform that connects those with surplus belongings to those in need, the website's founders possess a deep sense of social responsibility and environmental consciousness.</p>
                <p>Through their innovative approach and dedication to making a positive impact, the team behind the website for unwanted item donation strives to build a more sustainable and compassionate world, one where resources are shared to benefit those who need them the most.</p>
                <img className="signatureImage" src={signature} alt="signature"/>
            </div>
            <div className="rightSideAboutUs">
            </div>
        </section>
    )
}

export default AboutUs;