import React from "react";
import { Typewriter } from 'react-simple-typewriter';

const Data = () => {
    return(
      <div className="home__data">
        <h1 className="home__title"> Hello, I'm</h1>
        <h3 className="home__subtitle">Hendry Tjahaja Surijanto Putra</h3>
        <p className="home__description">And I'm a <span className="typewriter-job"><Typewriter 
                            words={['Backend Developer', 'Web Developer','Game Developer']}
                            loop={false}
                            cursor={true} /></span></p>
        <a href="#about" className="button button--flex">About Me</a>
      </div>
    )
}
export default Data