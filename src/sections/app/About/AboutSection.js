import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./components/SectionTitle";
import Widget from "./components/widget";
import About from "./style";
export default function AboutSection() {
  return (
    <About backgroundColor="#f2f5fb">
      <Container>
        <Row className="justify-content-center">
          <Col className="col-xl-6 col-lg-8 col-md-9 col-xs-10 text-center">
            <SectionTitle
              subTitle="We are about transparency and trust."
              title="Localization done directly with your partner"
              titleProps={{ mb: "50px" }}
              subTitleProps={{ mb: "15px" }}
            />
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col className="col-xxl-3 col-lg-4 col-md-6 col-sm-8 col-xs-9 order-2 order-lg-1">
            <Widget
              directionXS="row-reverse"
              title="Find the best offer"
              icon="fa fa-directions"
              text="Client: Choose the best fitting translators. Translator: Bid for suitable translation jobs of clients. As client you accept bids based on price and experience of the translator. As translator you cherry-pick the projects you want to work on."
            />
            <Widget
              directionXS="row-reverse"
              title="Direct contact"
              icon="fa fa-user-friends"
              text="There is no middleman – you get direct access to the experts. No annoying text monitoring or filtering. As client you may choose to collaborate with the same translators for future projects and grow your own team."
            />
            
          </Col>
          <Col
            xs="12"
            className="col-xxl-6 col-lg-4 col-md-8 col-xs-9 order-1 order-lg-2 text-center"
          >
            <About.ImageContent>
              <img src="/image/home-app/about-mobile-img.png" alt="content"/>
              <About.Shape>
                <img src="/image/home-app/green-shape.png" alt="content"/>
              </About.Shape>
           </About.ImageContent>
          </Col>
          <Col className="col-xxl-3 col-lg-4 col-md-6 col-sm-8 col-xs-9 order-3">
            <Widget
              directionXS="row"
              title="Content-centric"
              icon="fa fa-book-open"
              text="It's all about the content. Projects are set-up with content in mind so the localistars can work together effectively. Clients want to reach their global audience while translators want to choose from diverse tasks. We heard you both."
            />
            <Widget
              directionXS="row"
              title="Risk-free payment"
              icon="fa fa-credit-card"
              text="As a localistar you don't need to worry about your payment. Clients will only be charged if they approve the content provided by a translator. Translators always get paid on approval."
            />
            
          </Col>
        </Row>
      </Container>
    </About>
  );
}
