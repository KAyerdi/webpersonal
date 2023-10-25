import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kevin Perticarari Ayerdi </span>
            from <span className="purple"> Salto, Buenos Aires, Argentina.</span>
            <br /> I am passionate about development and technology.
            <br />
            I took FrontEnd and BackEnd courses that trained me as a Full Stack Developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Play Soccer
            </li>
            <li className="about-activity">
              <ImPointRight /> Play With My Dog
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">K. P. Ayerdi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
