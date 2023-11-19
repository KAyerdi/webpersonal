import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload, AiFillHtml5, AiOutlinePaperClip  } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from "../../Assets/../Assets/CV-Kevin.pdf"; //https://acrobat.adobe.com/id/urn:aaid:sc:US:d055343f-9ec2-4966-b44a-304ae6ed04b0
import cvImage from "../../Assets/../Assets/CV-Kevin.png";
import Particle from "../Particle";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href="https://cv-three-chi.vercel.app/"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlinePaperClip/>
            &nbsp;CV on web
          </Button>
        </Row>


        <Row className="resume">
        <img src={cvImage} alt="CV"  className="d-flex justify-content-center" style={{ maxWidth: "100%" }} />
        </Row>


        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            download="CV-Kevin.pdf"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
