import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedinIn } from 'react-icons/fa';

import metaImg from '../../Assets/Projects/meta.png';
import stars from '../../Assets/Projects/stars.jpg';
import SEEKER1 from '../../Assets/Projects/homescreen.png';
import virtualwing from '../../Assets/Projects/virtualwing.png';
import texttohuman from '../../Assets/Projects/ABLE.png';
import patterson from '../../Assets/Projects/patterson.png';
import tryon from '../../Assets/Projects/tryon.png';
import mobileopera from '../../Assets/Projects/mobileopera.png';
import metgala from '../../Assets/Projects/metgala2.png';
import dk from '../../Assets/Projects/dk.png';
import burnett from '../../Assets/Projects/burnett.png';
import purusha from '../../Assets/Projects/purusha.png';
import now from '../../Assets/Projects/now.png';
import alex from '../../Assets/Projects/alex.png';
import dodger from '../../Assets/Projects/dodger.png';
import samsung from '../../Assets/Projects/samsung.png';

const projects = [
  {
    imgPath: SEEKER1,
    title: 'Founder / CEO',
    description:
      'SEEKER a patented intelligence network for mental health and to protect against what is now being termed "Consensual Telepathy".',
    link: 'https://seeker-flow.io',
  },
  {
    imgPath: metaImg,
    title: 'The Whole Game',
    description:
      'Revolutionary Patent. Generative AI and remote rendering are the future of advertising, content creation and gaming.',
    link: 'https://patentimages.storage.googleapis.com/e8/55/7f/c2f2b274075639/US20220150553A1.pdf',
  },
  {
    imgPath: purusha,
    title: 'Purusha',
    description:
      'Monetized Conversational agent patented 3 years prior to ChatGPT. Initially built on GPT2 and evolved with every update',
    link: 'https://www.dropbox.com/s/53463e5ekijnkay/Purusha.mov?dl=0',
  },
  {
    imgPath: texttohuman,
    title: 'Text to Human - The Future of Law Enforcement',
    description:
      'Here i worked with the DOJ, the FBI and Georgetown law to create the most advanced training system for law enforcement.',
    link: 'https://vimeo.com/852126950',
  },
  {
    imgPath: virtualwing,
    title: 'Virtual Wing',
    description:
      "Meta's first location based Augmented Reality experience that allows users to explore and interact with a simulated environment.",
    link: 'https://www.dropbox.com/s/ycbp32rsf5hzs94/TatePOI_CaseStudy_SR_AudioTitlesGrade_001.mp4?dl=0',
  },

  {
    imgPath: patterson,
    title: 'A.I. based storytelling',
    description:
      'In 2017 I partnered with the worlds best selling author to bring one of his books to life through NLP.',
    link: 'https://www.dropbox.com/s/pj6yvvqx9h610r5/Patterson_043019.mp4?dl=0',
  },
  {
    imgPath: tryon,
    title: 'Virtual Try-on',
    description:
      "A deep dive into Computer Vision that was integrated into Meta's Codec avatar system.",
    link: '',
  },
  {
    imgPath: metgala,
    title: 'Met Gala',
    description:
      "Meta's first ever live 360 broadcast -- a strange experience on many levels.",
    link: 'https://www.adweek.com/performance-marketing/fashion-lovers-can-watch-the-met-gala-thanks-to-vogues-360-degree-livestream-on-facebook/',
  },
  {
    imgPath: now,
    title: 'Now',
    description:
      'Now DAO is a neuroscience based philanthropic web3 ecosystem with a game and NFT collection',
    link: 'https://now-dao.io',
  },
  {
    imgPath: stars,
    title: 'Stars of the Now',
    description:
      'A fictionalized account of my youth spent searching for enlightment through a prolonged derangement of the senses.',
    link: 'https://www.amazon.com/Stars-Now-Brian-Fox-ebook/dp/B00HZVJYHM',
  },

  {
    imgPath: dk,
    title: 'Director of Innovation on a number of TV shows.',
    description:
      'Brokered unprecendented retainer relationships for multiple TV shows from Steven Spielberg and David Goyer',
    link: '',
  },
  {
    imgPath: burnett,
    title: 'commercials, commercials, commercials',
    description:
      'A producer and director on so many spots. Coca Cola, Nintendo, Sprint, Allstate, McDonalds, etc.',
    link: 'https://vimeo.com/brianpfox',
  },
  {
    imgPath: dodger,
    title: 'Writer, Producer, Director - The Dissapearance of Daniel Dodger',
    description:
      'A feature film where a secret government experiment disseminates a drug to mind control the population',
    link: 'https://vimeo.com/22359658',
  },
  {
    imgPath: alex,
    title: 'Writer, Producer, Director - Bad Alex',
    description:
      'A feature film depicting the social injustice of false confessions with a bit of fight club thrown in.',
    link: '',
  },
  // {
  //   imgPath: mobileopera,
  //   title: 'Mobile Opera',
  //   description:
  //     "I developed the definitve non-linear framework for atomized content across Meta's platforms and watched the team bring it expertly to life in LATAM",
  //   link: 'https://www.dropbox.com/s/wzpg3aezfonqibp/MobileOpera.MP4?dl=0',
  // },
  // {
  //   imgPath: samsung,
  //   title: 'Samsung',
  //   description:
  //     "The largest creator based content program to come to life across Meta's surfaces.",
  //   link: 'https://www.dropbox.com/s/wkel01sgvgg7m4e/SS_CASESTUDY_V2_FINAL.mov?dl=0',
  // },
];

function Home() {
  return (
    <section>
      <Container fluid className="project-section">
        <Container className="home-content">
          <Row>
            <Col md={12} className="home-header">
              <div className="heading-container">
                <h1 className="heading-name">
                  <strong className="main-name">Brian Fox</strong>
                  <span className="sub-heading2">
                    Building the Future - The Medium is the Message
                  </span>
                  <span className="sub-heading">
                    An author, filmmaker, musician and creative technologist, I
                    spent 7 years at Meta working on creative applications for
                    language and vision models and have spent the last two years
                    building an AI focused on story science through the lens of
                    human psychology and neuroscience.
                  </span>
                  <a
                    className="linkedin-body"
                    href="https://www.linkedin.com/in/brianfox/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </h1>
              </div>
            </Col>
          </Row>
          <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
            {projects.map((project, index) => (
              <Col md={12} className="project-card" key={index}>
                <Row>
                  <Col md={6} xs={12}>
                    <h3 className="project-title">{project.title}</h3>
                    <p>{project.description}</p>
                    <a
                      href={project.link}
                      target="blank"
                      rel="noopener noreferrer"
                    >
                      Learn more
                    </a>
                  </Col>
                  <Col md={6} xs={12}>
                    <img
                      src={project.imgPath}
                      alt={project.title}
                      className="project-image"
                    />
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </section>
  );
}
export default Home;
