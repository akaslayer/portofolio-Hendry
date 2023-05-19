import React from "react";
import "./About.css";
import AboutImg from '../../assets/foto-remove.png';
import CV from '../../assets/CV_HendryTjahajaSurijantoPutra.pdf';
import Social from "./social";


const About = () => {
    return(
        <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">

            <div className="about__container__img">
            <img src={AboutImg} alt="" className="about__img" />
            </div>
        
        <div className="about__data">
            <p className="about__description">Hi, I'm Hendry Tjahaja Surijanto Putra, student of Multimedia Nusantara University majoring in Information
            Technology. Currently seeking for a job to be a part of a company where I could enhance my skills and gain
            work experience. Interested in Backend Development, Frontend Development, Cloud Computing, Game
            Development, and Mobile Development.</p>
            <Social></Social>
            <a download = "" href={CV} className="button button--flex">Download CV</a>
        </div>
        </div>
        </section>
    )
}

export default About