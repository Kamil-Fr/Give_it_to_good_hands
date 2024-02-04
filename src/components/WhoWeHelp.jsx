import { useState } from "react";
import "../scss/_whoWeHelp.scss";
import decoration from "../assets/Decoration.svg";

const organizationsData = {
    "Foundations": [
        {
            name: "Foundation “I care about my health”",
            mission: "Helping people in difficult life situations.",
            needs: "clothes, food, household appliances, furniture, toys",
        },
        {
            name: "Foundation  ”For children”",
            mission: "Helping children from poor families.",
            needs: "clothes, furniture, toys",
        },
        {
            name: "Foundation “Without a home”",
            mission: "Help for people without a place of residence.",
            needs: "clothes, food, warm blankets",
        },
        {
            name: "Foundation “Health“",
            mission: "Helping people in difficult health situations.",
            needs: "clothes, food, household appliances, furniture, toys",
        },
        {
            name: "Foundation “For children”",
            mission: "Help for children.",
            needs: "clothes, furniture, toys",
        },
        {
            name: "Foundation “Without a home”",
            mission: "Help for people without a place of residence.",
            needs: "clothes, food, warm blankets",
        },
        {
            name: "Foundation “I care about my health”",
            mission: "Helping people in difficult life situations.",
            needs: "clothes, food, household appliances, furniture, toys",
        },
        {
            name: "Foundation “For children”",
            mission: "Helping children from poor families.",
            needs: "clothes, furniture, toys",
        },
        {
            name: "Foundation “Without a home”",
            mission: "Help for people without a place of residence.",
            needs: "clothes, food, warm blankets",
        },
    ],
    "Non-governmental organizations": [
        {
            name: "Organization “Help”",
            mission: "Helping people in difficult life situations.",
            needs: "clothes, food, household appliances, furniture, toys",
        },
        {
            name: "Organization “My home”",
            mission: "Helping homeless people.",
            needs: "clothes, food, warm blankets",
        },
        {
            name: "Organization “Don't give up!”",
            mission: "Helping people in difficult life situations.",
            needs: "clothes, food, household appliances, furniture, toys",
        },
        {
            name: "Organization “Diversity”",
            mission: "Helping people from various social minorities.",
            needs: "clothes, food, household appliances, furniture, toys",
        },
        {
            name: "Organization “Share with others”",
            mission: "Helping the needy.",
            needs: "clothes, food, household appliances, furniture, toys",
        },
        {
            name: "Organizacja “Reuse”",
            mission: "Reusing things.",
            needs: "clothes, furniture, toys",
        },
    ],
    "Local collections": [
        {
            name: "Charity collection “Everyone can help“",
            mission: "Collection for those in need.",
            needs: "clothes, food, toys",
        },
        {
            name: "Collection for environmental protection",
            mission: "Reusing things to protect the planet.",
            needs: "clothes, toys",
        },
        {
            name: "Social collection ”Be eco!”",
            mission: "Spreading attitudes towards disseminating knowledge about recycling.",
            needs: "clothes, household appliances, furniture",
        },
    ],
};

const itemsPerPage = 3;

function WhoWeHelp() {
    const [activeCategory, setActiveCategory] = useState("Foundations");
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
                <h1>Who do we help?</h1>
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
            In our database you will find a list of verified entities with which we cooperate. You can check what they do, who they help and what they need.
            </p>
            <div className="viewInfo">
                {currentItems.map((organization, index) => (
                    <div key={index} className={index === 2 ? "noBorder" : ""}>
                        <div>
                            <h1>{organization.name}</h1>
                            <p>Goal and mission: {organization.mission}</p>
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
