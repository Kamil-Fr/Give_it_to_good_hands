import HomeHeader from "./HomeHeader.jsx";
import HomeMainView from "./HomeMainView.jsx";
import HomeThreeColumns from "./HomeThreeColumns.jsx";
import FourSteps from "./FourSteps.jsx";
import AboutUs from "./AboutUs.jsx";
import WhoWeHelp from "./WhoWeHelp.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

function Home () {
    return (
        <>

            <HomeHeader/>
            <HomeMainView/>
            <HomeThreeColumns/>
            <FourSteps/>
            <AboutUs/>
            <WhoWeHelp/>
            <Contact/>
            <Footer/>
        </>
    )

}

export default Home;