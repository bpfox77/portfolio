import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
    
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              
              </h1>
              <h1 className="heading-name">
              <strong className="main-name"> def rebirth (time):</strong> <br />
                me = self.brian_fox
                <br />
                done_things = innovation_lead<br />
                creative_director<br />
                producer<br />
                founder<br />
              </h1>

              <div
                style={{ paddingLeft: 50, paddingTop: 1, textAlign: "left" }}
              >
         return <strong className="main-name">coming soon</strong>
              </div>
            </Col>

            {/* <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col> */}
          </Row>
        </Container>
      </Container>
    
    </section>
  );
}

export default Home;
