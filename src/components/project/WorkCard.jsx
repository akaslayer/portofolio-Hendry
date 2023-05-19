import "./WorkCard.css";
import Pro1 from '../../assets/hendry_run.png';
import React from "react";
import { NavLink } from "react-bootstrap";

const WorkCard = (props) => {
    return (
            <div className="project-card">
                <img src={props.imgsrc} alt="hahah"></img>
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        <NavLink to={props.view} className="btn">View</NavLink>
                    </div>
                </div>
            </div>
    );
};

export default WorkCard