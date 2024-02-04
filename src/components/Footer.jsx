import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";
import "../scss/_contactFooter.scss";


function Footer() {
    return (
        <footer>
            <span>Copyright by Coders Lab and Kamil Korzeniowski</span>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="facebook"/></a>
            <a href="https://www.instagram.com/?hl=pl" target="blank" rel="noopener noreferrer"><img src={instagram} alt="instagram"/></a>
        </footer>
)
}

export default Footer;