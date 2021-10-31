import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const ServiceList = ({ services }) => {
    return (
        <div>
            <Container>
                <Row>
                    {services.map((service, i) => (
                        <Col md={4} sm={12} className="d-flex align-items-stretch" key={i}>
                            <Card style={{ width: '25rem' }} className="mt-3 shadow-lg p-3 bg-white rounded">
                                <Card.Body>
                                    <Card.Title className="text-left">{service.title}</Card.Title>
                                    <Card.Text className="text-justify">{service.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ServiceList
