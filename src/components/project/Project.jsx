import React from "react";
import Card from "./Card";
import "./Project.css";
import { useNav } from "../../hooks/useNav";

const Project = () => {
    const projectRef = useNav("Project")
    return(
        <section ref={projectRef} className="project section" id="projectSection">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">My Projects</span>
        {/* <div className="project-container">
            {WorkCardData.map((val,ind) =>{
                return(
                    <WorkCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text = {val.text}
                    view = {val.view}
                    />
                )
            })}
        </div> */}
        <Card></Card>
        </section>
    )
}
export default Project