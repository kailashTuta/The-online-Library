import React from 'react'
import { Carousel, Container, Row, Col } from 'react-bootstrap'
import img1 from '../assets/img1.jpg'


const Home = () => {
    return (
        <div>
            <Carousel fade className="mb-3">
                <Carousel.Item>
                    <img src={img1} className="d-block w-100" alt="Img1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img1} className="d-block w-100" alt="Img1" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img1} className="d-block w-100" alt="Img1" />
                </Carousel.Item>
            </Carousel>

            <Container>
                <Row>
                    <Col>
                        <h4 className="text-primary">Discussion Rooms</h4>
                        <hr />
                        <p>Library has introduced Discussion Rooms. Students need to study in groups can use these discussions rooms.</p>
                    </Col>

                    <Col>
                        <h4 className="text-primary">Study carrels</h4>
                        <hr />
                        <p>Library has added study carrels in its infrastructure for personalized studies purpose. The carrels are located at Library. These carrels are partitioned by glass fitting and charging point is also provided for the laptops.</p>
                    </Col>

                    <Col>
                        <h4 className="text-primary">Purchase of New books</h4>
                        <hr />
                        <p>Library has recently procured 547 books(Aug.2019) for students and faculty members.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home
