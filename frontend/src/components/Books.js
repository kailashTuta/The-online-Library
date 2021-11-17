import React from 'react'
import { Link } from "react-router-dom";
import { Card, Badge, Row, Col } from 'react-bootstrap'

const Books = ({ books, loading, user }) => {
    if (loading) {
        return <h2>loading...</h2>
    }
    return (
        <div>
            <div className="container">
                <Row>
                    {books.map((book, i) => (
                        <Col md={3} sm={12} className="d-flex align-items-stretch" key={i}>
                            <Card key={book._id} style={{ width: '25rem' }} className="mt-3 mb-2 shadow-lg p-3 bg-white rounded">
                                <Card.Img variant="top" src={book.thumbnailUrl} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    {book.categories.map((category, i) => (
                                        <Badge pill bg="info" className="m-1" key={i} >
                                            {category}
                                        </Badge>
                                    ))}
                                    {book.authors.map((author, i) => (
                                        <Card.Text className="lead" key={i}>
                                            {author}
                                        </Card.Text>
                                    ))}
                                </Card.Body>
                                <Link to={`/books/${book._id}`} className="btn btn-warning">View More</Link>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default Books
