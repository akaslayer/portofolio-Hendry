import React  from "react";
import "./home.css";

import Data from "./data";


const Home = () => {
    return(
        <section className="home section" id="homeSection">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__img"></div>
                    <Data/>
                </div>
                </div>
        </section>

    )
}
export default Home