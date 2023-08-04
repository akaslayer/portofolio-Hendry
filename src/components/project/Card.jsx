import React from "react";
import Pro1 from '../../assets/hendry_run.png';
import Pro2 from '../../assets/frood.png';
import Pro4 from '../../assets/resto.JPG';
import Pro5 from '../../assets/bentask.png';
import Pro6 from '../../assets/aqua-lord.JPG';
import Pro7 from '../../assets/hotel.JPG';
import Pro8 from '../../assets/anima.JPG';
import Pro9 from '../../assets/Dsion.JPG';






const Card = (props) => {
    return(
    <div>
    <div className="cards">
        <div className="card">
            <div className="container-card">
                <img src={Pro1} alt="Hendry Run"></img>
            </div>
            <div className="details">
                <h3>Hendry Run</h3>
                <p>Hendry Run is a 3D platformer game made with Unity. Your task is to guide Hendry The Fox and make him rich by collecting golden coins.</p>
            </div>
            <div className="button-view">
                <a href="https://umn.itch.io/hendry-run" className="button-card">View</a>
            </div>
        </div>
        <div className="card">
            <div className="container-card">
                <img src={Pro5} alt="Bentask"></img>
            </div>
            <div className="details">
                <h3>Bentask: To-Do List App</h3>
                <p>Bentask is an Android aplication that helps its users organize their activities to be more structured and efficient.</p>
            </div>
            <div className="button-view">
                <a href="https://github.com/myqpalzm/UAS-Mobile-Bentask" className="button-card">View</a>
            </div>
        </div>
        <div className="card">
            <div className="container-card">
                <img src={Pro4} alt="Genvis Resto"></img>
            </div>
            <div className="details">
                <h3>Genvis Resto</h3>
                <p>Genvis Resto is a japanese food ordering website equipped with CRUD features.</p>
            </div>
            <div className="button-view">
                <a href="https://github.com/akaslayer/Genvis-Resto" className="button-card">View</a>
            </div>
        </div>
        <div className="card">
            <div className="container-card">
                <img src={Pro2} alt="Hendry Run"></img>
            </div>
            <div className="details">
                <h3>Frood</h3>
                <p>Bangkit Capstone Project Application For Preventing Food Waste With Fresh And Spoilage Detection.</p>
            </div>
            <div className="button-view">
                <a href="https://github.com/capstone-frood/Frood" className="button-card">View</a>
            </div>
        </div>
        <div className="card">
            <div className="container-card">
                <img src={Pro6} alt="Aqua Lord"></img>
            </div>
            <div className="details">
                <h3>Aqua Lord</h3>
                <p>Aqua Lord is an interesting yet simple aquarium-like game that can kill any free time or boredom.</p>
            </div>
            <div className="button-view">
                <a href="https://drive.google.com/file/d/1APtZi_U7YBR-qJwB2G-fY3tIeUXZiENy/view" className="button-card">View</a>
            </div>
        </div>
        <div className="card">
            <div className="container-card">
                <img src={Pro7} alt="Genvis Hotel"></img>
            </div>
            <div className="details">
                <h3>Genvis Hotel</h3>
                <p>Genvis Hotel is a hotel booking website that is equipped with CRUD features on the admin side.</p>
            </div>
            <div className="button-view">
                <a href="https://github.com/akaslayer/Genvis-Hotel" className="button-card">View</a>
            </div>
        </div>
    </div>
        <div className="cards-2">
        <div className="card center-card">
            <div className="container-card">
                <img src={Pro8} alt="Anima"></img>
            </div>
            <div className="details">
                <h3>Anima</h3>
                <p> Anima is an expert system website that can help you detect anemia early.</p>
            </div>
            <div className="button-view">
                <a href="https://github.com/akaslayer/Anima" className="button-card">View</a>
            </div>
        </div>
        <div className="card center-card">
            <div className="container-card">
                <img src={Pro9} alt="Dsion"></img>
            </div>
            <div className="details">
                <h3>Dsion</h3>
                <p>Dsion is an expert system website using certainty factor method to diagnose depression.</p>
            </div>
            <div className="button-view">
                <a href="https://github.com/steven278/Expert-System" className="button-card">View</a>
            </div>
        </div>
    </div>
    </div>
    )
}
export default Card