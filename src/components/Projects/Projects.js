import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import virtualwing from "../../Assets/Projects/virtualwing.png";
import iw from "../../Assets/Projects/iw.png";
import patterson from "../../Assets/Projects/patterson.png";
import tryon from "../../Assets/Projects/tryon.png";
//import mobileopera from "../../Assets/Projects/mobileopera.png";
import metgala from "../../Assets/Projects/metgala.png";
import dk from "../../Assets/Projects/dk.png";
import burnett from "../../Assets/Projects/burnett.png";
import persona from "../../Assets/Projects/persona.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          A <strong className="purple">storied</strong> career
        </h1>

        <p style={{ color: "white" }}>and a sampling of things</p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={virtualwing}
              isBlog={false}
              title="The Virtual Wing"
              description="Meta's first location based XR experience. I launched it with Tate Britian and Covid killed our MoMA launch unfortunately."
              // link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tryon}
              isBlog={false}
              title="Virtual Try-ons"
              description="A deep dive into computer vision with body and joint detection for digitial fashion."
              // link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={patterson}
              isBlog={false}
              title="A.I. based storytelling"
              description="I partnered with the worlds best selling author to bring one of his books to life through NLP"
              // link=""
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={samsung}
              isBlog={false}
              title="Samsung Storytellers"
              description="The largest creator based content program to come to life across our surfaces"
              link=""
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={persona}
              isBlog={false}
              title="Persona Designer"
              description="Utilizing GPT-3, Wit.ai and connecting to personality databases to define jungian archetypes we allow any business, celebrity or person to recreate their own personality in text through A.I. "
              // link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iw}
              isBlog={false}
              title="Infinite Window"
              description="A patented codec to stream realtime from Unity or unreal. With a 3ms latency we enable instant photoreal connection to build any world you can imagine."
              // link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={metgala}
              isBlog={false}
              title="Met Gala"
              description="Meta's first ever live 360 broadcast -- a strange experience on many levels."
              // link=""
            />
          </Col>

          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={burnett}
              isBlog={false}
              title="commercials, commercials commercials"
              description="A producer and director on so many spots. Coca Cola, Nintendo, Sprint, Allstate, McDonalds, etc."
              link="https://vimeo.com/brianpfox"
            />
          </Col>

          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={dk}
              isBlog={false}
              title="Development Director and Director of Innovation on a number of TV shows."
              description="Brokered unprecendented retainer relationships for multiple TV shows from Steven Spielberg and David Goyer"
              // link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
