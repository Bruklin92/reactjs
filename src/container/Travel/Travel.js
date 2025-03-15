import React from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import styles from "./Travel.module.css";

function Travel(props) {
  return (
  
  <>
    <header>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src="img/tlogo.png" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
              <a href="#home">Home</a>
              <a href="#link">About Us</a>
              <a href="#link">Package</a>
              <a href="#link">Destination</a>
              <a href="#link">Blog</a>
              <a href="#link">Contact</a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>

    <section className={styles.herosec}>
      <div className={styles.mainhero}>
      <h1>About Us</h1>
      <a>HOME / </a>
      <span> About us</span>
      </div>
    </section>

      <section>
        <Container>
          <p className="main_title">Gallery</p>
          <h2 className="sub_title">Unforgettable moment</h2>

          <Row>
            <Col lg={6}>
              <div className={`${styles.galImg} ${styles.galary}`}>
                <img src="img/i1.webp" />
                <h2 className={styles.cname}>Bali</h2>
              </div>
            </Col>

            <Col lg={6}>
              <Row className={styles.gap}>
                <Col lg={12}>
                  <div className={`${styles.galImg1} ${styles.galary}`}>
                    <img src="img/i2.jpeg" />
                    <h2 className={styles.cname}>Dubai</h2>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className={`${styles.galImg2} ${styles.galary}`}>
                    <img src="img/i3.jpg" />
                    <h2 className={styles.cname}>New Yourk</h2>
                  </div>
                </Col>

                <Col lg={6}>
                  <div className={`${styles.galImg3} ${styles.galary}`}>
                    <img src="img/i4.jpg" />
                    <h2 className={styles.cname}>London</h2>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Travel;
