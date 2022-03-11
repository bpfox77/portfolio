import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./PersonalCards";
import Particle from "../Particle";

import now from "../../Assets/Projects/now.png";
import stars from "../../Assets/Projects/stars.jpg";
import alex from "../../Assets/Projects/alex.png";
import dodger from "../../Assets/Projects/dodger.png";

function Personal() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          How I <strong className="purple">spend time</strong>
        </h1>

        {/* <p style={{ color: "white" }}>and a sampling of things</p> */}

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={8} className="project-card">
            <ProjectCard
              imgPath={now}
              isBlog={false}
              title="Now"
              description="Creator / Developer of this Neuroscience Based Web3 Philanthropic game and DAO. "
              link="https://github.com/bpfox77/indraWhitepaper/blob/917cda0b5742145774ccfa1910661d4b7d9c74f9/Change.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stars}
              isBlog={false}
              title="The Virtual Wing"
              description="Meta's first location based XR experience. I launched it with Tate Britian and Covid killed our MoMA launch unfortunately."
              link="https://www.amazon.com/Stars-Now-Brian-Fox-ebook/dp/B00HZVJYHM"
            />
          </Col>

          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={alex}
              isBlog={false}
              title="Writer, Producer, Director"
              description="A feature film depicting the social injustice of false confessions with a bit of fight club thrown in."
              // link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={dodger}
              isBlog={false}
              title="Writer, Producer, Director"
              description="A feature film where a secret government experiment disseminates a drug to mind control the population"
              link="https://vimeo.com/22359658"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Personal;
