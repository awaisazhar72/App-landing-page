import React from "react";

function About(props) {
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad illum
          nisi voluptatem veniam? Voluptatum sunt, unde debitis ducimus dolorem
          recusandae dolore quaerat pariatur architecto. Soluta mollitia in sunt
          quasi consequuntur.
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  );
}

export default About;
