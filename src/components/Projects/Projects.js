import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bitsOfCode from "../../Assets/Projects/blog.png";
import chatify from "../../Assets/Projects/chatify.png";
import editor from "../../Assets/Projects/codeEditor.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card" >
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/KAyerdi/Chatify"
            />
          </Col>

          <Col md={4} className="project-card" >
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/KAyerdi/Bits-0f-C0de"
            />
          </Col>

          <Col md={4} className="project-card" >
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/KAyerdi/Editor-io"
            />
          </Col>
          <Col md={4} className="project-card" >
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Twitter Clone"
              description="Personal project for educational purposes, created with React.js, TypeScript and some CSS. It has features that allow the user to send messages in real time, share images, and support reactions on messages."
              ghLink="https://github.com/KAyerdi/Twitter-Clone.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Minecraft Clone"
              description="This web video game is a personal project for educational purposes, created with HTML, CSS, JavaScript and ThreeJS."
              ghLink="https://github.com/KAyerdi/Minecraft-Clone.git"
            />
          </Col>
          <Col md={4} className="project-card"  >
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="ChatGPT Clone"
              description="This is a personal project for educational purposes, created with React and Tailwind."
              ghLink="https://github.com/KAyerdi/ChatGPT-Clone.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;