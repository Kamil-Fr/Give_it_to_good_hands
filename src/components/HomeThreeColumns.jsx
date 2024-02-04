import "../scss/_homeThreeColumns.scss";

function HomeThreeColumns() {

    return (
        <section id="threeColumns" className="threeColumns">
            <div className="firstColumn column">
                <h1>10</h1>
                <h2>GIVEN BAGS</h2>
                <p>The collected bags contain a variety of items intended for achieving the goal of donating unwanted belongings, ranging from clothing and household essentials to toys and other useful articles.</p>
            </div>
            <div className="secondColumn column">
                <h1>5</h1>
                <h2>SUPPORTED ORGANIZATIONS</h2>
                <p>Our initiative encompass a diverse range, including charities, community outreach programs, and environmental groups, all united in their mission to redistribute and repurpose unused items for the benefit of those in need.</p>
            </div>
            <div className="thirdColumn column">
                <h1>7</h1>
                <h2>ORGANIZED COLLECTIONS</h2>
                <p>Local collections cause attract a variety of community-based organizations, neighborhood associations, and grassroots initiatives, pooling efforts to gather and redistribute surplus goods within the local area for the betterment of residents and the reduction of waste.</p>
            </div>
        </section>
    )
}

export default HomeThreeColumns;