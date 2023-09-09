import HomeHeader from "./HomeHeader.jsx";
import HomeMainView from "./HomeMainView.jsx";
import HomeHeroImage from "../assets/Home-Hero-Image.jpg";

function Home () {
    return (
        <>
            <img className="header-img" src={HomeHeroImage} alt="box with things"/>
            <HomeHeader/>
            <HomeMainView/>
        </>
    )

}

export default Home;