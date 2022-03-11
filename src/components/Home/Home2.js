import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              CREATING THE<span className="purple"> FUTURE </span>
            </h1>
            <p className="home-about-body">
              I have a long history as a storyteller and creative technologist
              beginning as a
              <i>
                <b className="purple">
                  {" "}
                  Vagabond Musician. Novelist and Filmmaker.
                </b>
              </i>{" "}
              <br />
              <br />
              My fascination with code has led me to evolve from producing
              multi-million dollar commercials, feature films and TV shows
              to&nbsp;
              <i>
                <b className="purple">partnering with </b> neuroscientists and
                engineers to develop my ideas into products in{" "}
                <b className="purple">
                  Computer Vision and Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              This evolution has manifested as a passion for developing Web3
              products that utilize the{" "}
              <b className="purple"> blockchain, decentralized A.I.'s</b> and
              <i>
                <b className="purple"> React.</b>
              </i>
              <br />
              <br />
              &nbsp;I'm working on building the ultimate system of altruism
              through
              <i>
                <b className="purple"> Technology.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://twitter.com/buddhaloop"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/brianfox/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/b_p_fox/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
