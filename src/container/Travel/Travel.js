import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Travel.module.css';

function Travel(props) {
    return (
        <section>
            <Container>
                <p className='main_title'>Gallery</p>
                <h2 className='sub_title'>Unforgettable moment</h2>

                <Row>
                    <Col className='gallary' lg={6}>
                       <div className={styles.galImg}>
                       <img src="img/i1.webp"  />
                       </div>
                    </Col>
                    <Col className='gallary' lg={6}>
                        <Row>
                            <Col lg={12}>
                                <div className={styles.galImg}>
                                    <img src="img/i2.jpeg" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className={styles.galImg}>
                                    <img src="img/i3.jpg" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className={styles.galImg}>
                                    <img src="img/i4.jpg" />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Travel;