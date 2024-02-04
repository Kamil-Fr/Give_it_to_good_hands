import {Link} from "react-router-dom";
import "../scss/_fourSteps.scss";
import decoration from "../assets/Decoration.svg"
import iconOne from "../assets/Icon-1.svg"
import iconTwo from "../assets/Icon-2.svg"
import iconThree from "../assets/Icon-3.svg"
import iconFour from "../assets/Icon-4.svg"

function FourSteps() {
    return (
        <>
            <section id="greetingSteps">
                <div className="greetingSteps">
                    <h1>Just 4 simple steps</h1>
                    <img src={decoration} alt="decoration"/>
                </div>
                <div className="fourSteps">
                    <div className="firstStep">
                        <img src={iconOne} alt="icons"/>
                        <h1>Choose things</h1>
                        <div className="pipe"></div>
                        <p>clothes, toys, equipment and more</p>
                    </div>
                    <div className="secondStep">
                        <img src={iconTwo} alt="icons"/>
                        <h1>Pack them up</h1>
                        <div className="pipe"></div>
                        <p>use garbage bags</p>
                    </div>
                    <div className="thirdStep">
                        <img src={iconThree} alt="icons"/>
                        <h1>Decide who you want to help</h1>
                        <div className="pipe"></div>
                        <p>choose a trusted place</p>
                    </div>
                    <div className="fourthStep">
                        <img src={iconFour} alt="icons"/>
                        <h1>Order a courier</h1>
                        <div className="pipe"></div>
                        <p>the courier will arrive at a convenient time</p>
                    </div>
                </div>
                <div className="greetingButton">
                    <Link to="/login">GIVE YOUR ITEMS BACK</Link>
                </div>
            </section>
        </>
    )
}
export default FourSteps;