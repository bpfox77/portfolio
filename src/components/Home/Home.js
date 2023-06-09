import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./HomeCards";
import { FaLinkedinIn } from 'react-icons/fa';

import metaImg from '../../Assets/Projects/meta.png';
import stars from '../../Assets/Projects/stars.jpg';
import SEEKER1 from "../../Assets/Projects/SEEKER1.png";
import virtualwing from "../../Assets/Projects/virtualwing.png";
import texttohuman from "../../Assets/Projects/texttohuman.png";
// import iw from "../../Assets/Projects/iw.png";
import patterson from "../../Assets/Projects/patterson.png";
import tryon from "../../Assets/Projects/tryon.png";
import mobileopera from "../../Assets/Projects/mobileopera.png";
import metgala from "../../Assets/Projects/metgala.png";
import dk from "../../Assets/Projects/dk.png";
import burnett from "../../Assets/Projects/burnett.png";
import purusha from "../../Assets/Projects/purusha.png";
import now from "../../Assets/Projects/now.png";
import alex from '../../Assets/Projects/alex.png';
import dodger from '../../Assets/Projects/dodger.png';
import samsung from '../../Assets/Projects/samsung.png';

function Home() {
  return (
    <section>
      <Container fluid className="project-section">
    
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              
              </h1>
              <h1 className="heading-name">
            <strong className="main-name">Brian_Fox </strong>  <br />
            
                &nbsp;&nbsp;&nbsp;&nbsp;   &nbsp; inventor<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;       creative_director<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;   producer<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;     founder<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;  &nbsp;     developer<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;      author<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;   &nbsp;      filmmaker<br />
                        <a className="linkedin-body"
                href="https://www.linkedin.com/in/brianfox/"
                
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a> 
              </h1>
             
           
            </Col>
        
      
       
          </Row>
      
        
 
<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
<Col md={6} className="project-card">
            <ProjectCard
              imgPath={metaImg}
              isBlog={false}
              title="The whole game"
              description="You should understand my contribution to this patent. It's big."
              // link=""
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={purusha}
              isBlog={false}
              title="Purusha"
              description="Monetized Conversational agent patented 3 years prior to ChatGPT. Initially built on GPT2 and evolved with every update"
              // link=""
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={SEEKER1}
              isBlog={false}
              title="Founder / Developer"
              description="SEEKER is an advanced AI mobile application and platform launching soon. Patent pending."
              // link=""
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={texttohuman}
              isBlog={false}
              title="Full Project Coming Soon"
              description="Text to Meta Human is just one aspect of the most advanced prompt based XR/AI experiences I've seen out there"
              // link=""
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={now}
              isBlog={false}
              title="Founder / Developer"
              description="Now DAO is a neuroscience based philothropic web3 ecosystem with a game and NFT collection"
              // link=""
            />
          </Col>
          <Col md={6} className="project-card">
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
              description="A deep dive into computer vision for digitial fashion."
              // link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={patterson}
              isBlog={false}
              title="A.I. based storytelling"
              description="In 2017 I partnered with the worlds best selling author to bring one of his books to life through NLP"
              // link=""
            />
          </Col>


<Col md={4} className="project-card">
            <ProjectCard
              imgPath={stars}
              isBlog={false}
              title="Stars of the Now, a novel"
              description="A fictionalized account of my youth spent searching for enlightment through a prolonged derangement of the senses."
              link="https://www.amazon.com/Stars-Now-Brian-Fox-ebook/dp/B00HZVJYHM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mobileopera}
              isBlog={false}
              title="Social Opera"
              description="I developed the definitve non-linear framework for atomized content across Meta's platforms and watched the team bring it expertly to life in LATAM"
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={samsung}
              isBlog={false}
              title="Samsung Storytellers"
              description="The largest creator based content program to come to life across our surfaces"
              link=""
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
              title="Director of Innovation on a number of TV shows."
              description="Brokered unprecendented retainer relationships for multiple TV shows from Steven Spielberg and David Goyer"
              // link=""
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
      
    
    </section>
  );
}

export default Home;
