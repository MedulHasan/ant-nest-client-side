import React from "react";
import Banner from "./Banner/Banner";
import Offers from "./Offers/Offers";

const Home = ({ navigate }) => {
    return (
        <div>
            <Banner navigate={navigate} />
            <Offers />
        </div>
    );
};

export default Home;
