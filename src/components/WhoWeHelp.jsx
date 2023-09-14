import { useState } from "react";
import "../scss/_whoWeHelp.scss";
import decoration from "../assets/Decoration.svg";

const organizationsData = {
    "Fundacje": [
        {
            name: "Fundacja “Dbam o Zdrowie”",
            mission: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            needs: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
        },
        {
            name: "Fundacja “Dla dzieci”",
            mission: "Pomoc dzieciom z ubogich rodzin.",
            needs: "ubrania, meble, zabawki",
        },
        {
            name: "Fundacja “Bez domu”",
            mission: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
            needs: "ubrania, jedzenie, ciepłe koce",
        },
        {
            name: "Fundacja “Dbam o Zdrowie”",
            mission: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            needs: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
        },
        {
            name: "Fundacja “Dla dzieci bez domu”",
            mission: "Pomoc dzieciom z ubogich rodzin.",
            needs: "ubrania, meble, zabawki",
        },
        {
            name: "Fundacja “Bez domu”",
            mission: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
            needs: "ubrania, jedzenie, ciepłe koce",
        },
        {
            name: "Fundacja “Dbam o Zdrowie”",
            mission: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
            needs: "ubrania, jedzenie, sprzęt AGD, meble, zabawki",
        },
        {
            name: "Fundacja “Dla dzieci”",
            mission: "Pomoc dzieciom z ubogich rodzin.",
            needs: "ubrania, meble, zabawki",
        },
        {
            name: "Fundacja “Bez domu”",
            mission: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
            needs: "ubrania, jedzenie, ciepłe koce",
        },
    ],
    "Organizacje pozarządowe": [
        {
            name: "Organizacja “Lorem Ipsum 1”",
            mission: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            needs: "Egestas, sed, tempus",
        },
        {
            name: "Organizacja “Lorem Ipsum 2”",
            mission: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            needs: "Ut, aliquam, purus, sit, amet",
        },
        {
            name: "Organizacja “Lorem Ipsum 3”",
            mission: "Scelerisque in dictum non consectetur a erat nam.",
            needs: "Mi, quis, hendrerit, dolor",
        },
        {
            name: "Organizacja “Lorem Ipsum 1”",
            mission: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            needs: "Egestas, sed, tempus",
        },
        {
            name: "Organizacja “Lorem Ipsum 2”",
            mission: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            needs: "Ut, aliquam, purus, sit, amet",
        },
        {
            name: "Organizacja “Lorem Ipsum 3”",
            mission: "Scelerisque in dictum non consectetur a erat nam.",
            needs: "Mi, quis, hendrerit, dolor",
        },
    ],
    "Lokalne zbiórki": [
        {
            name: "Fundacja “Lorem Ipsum 1”",
            mission: "Quis varius quam quisque id diam vel quam elementum pulvinar.",
            needs: "Egestas, sed, tempus, gestas, sed, tempus",
        },
        {
            name: "Fundacja “Lorem Ipsum 2”",
            mission: "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
            needs: "Ut, aliquam, purus, sit, amet, Ut, aliquam, purus, sit, amet",
        },
        {
            name: "Fundacja “Lorem Ipsum 3”",
            mission: "Scelerisque in dictum non consectetur a erat nam.",
            needs: "Mi, quis, hendrerit, dolor, Mi, quis, hendrerit, dolor",
        },
    ],
};

const itemsPerPage = 3;

function WhoWeHelp() {
    const [activeCategory, setActiveCategory] = useState("Fundacje");
    const [currentPage, setCurrentPage] = useState(1);

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = organizationsData[activeCategory].slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    const totalPages = Math.ceil(
        organizationsData[activeCategory].length / itemsPerPage
    );

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <section id="whoWeHelp" className="whoWeHelp">
            <div className="headerWhoHelp">
                <h1>Komu pomagamy?</h1>
                <img src={decoration} alt="decoration" />
            </div>
            <div className="switchWhoHelp">
                {Object.keys(organizationsData).map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryClick(category)}
                        className={activeCategory === category ? "active" : ""}
                    >
                        {category}
                    </button>
                ))}

                                </div>
            <p className="articleP">
                W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
                współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
                czego potrzebują.
            </p>
            <div className="viewInfo">
                {currentItems.map((organization, index) => (
                    <div key={index} className={index === 2 ? "noBorder" : ""}>
                        <div>
                            <h1>{organization.name}</h1>
                            <p>Cel i misja: {organization.mission}</p>
                        </div>
                        <p>{organization.needs}</p>
                    </div>
                ))}
            </div>
            {totalPages > 1 && (
                <div className="pageNumber">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <span
                            key={index}
                            onClick={() => handlePageClick(index + 1)}
                            className={currentPage === index + 1 ? "activePage" : ""}
                        >
              {index + 1}
            </span>
                    ))}
                </div>
            )}
        </section>
    );
}

export default WhoWeHelp;
