import React  from "react";
import "./home.css";
import { useNav } from "../../hooks/useNav";

import Data from "./data";


const Home = () => {
    const homeref = useNav("Home")
    return(
        <section ref={homeref} className="home section" id="homeSection">
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