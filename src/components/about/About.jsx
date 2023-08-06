import React from "react";
import "./About.css";
import AboutImg from '../../assets/foto-remove.png';
import CV from '../../assets/CV_HendryTjahajaSurijantoPutra.pdf';
import Social from "./social";
import { useNav } from "../../hooks/useNav";


const About = () => {
    const aboutRef = useNav("About")
    return(
        <section ref={aboutRef} className="about section" id="aboutSection">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">

            <div className="about__container__img">
            <img src={AboutImg} alt="" className="about__img" />
            </div>
        
        <div className="about__data">
            <p className="about__description">I’m Hendry Tjahaja Surijanto Putra, a fresh graduate student from Multimedia Nusantara University majoring in Informatics. Currently seeking for a job to be a part of a company where I could enhance my skills and gain work experience. Interested in backend development and game development. I’m also a person who is committed to the task given and an adaptable person.</p>
            <Social></Social>
            <a download = "" href={CV} className="button button--flex">Download CV</a>
        </div>
        </div>
        </section>
    )
}

export default About