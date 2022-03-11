import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ... a father of 2 beautiful daughters in Chicago.
            <br />
            ... a yogi
            <br />
            ... obsessed with brain health and metabolism
            <br />
            ... obsessed with human optimization
            <br />
            ... obsessed with the mountains and the desert.
            <br />
            <br />
          </p>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            “Synchronicity is an ever present reality for those with eyes to
            see.”{" "}
          </p>
          <footer className="blockquote-footer">Carl Jung</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
