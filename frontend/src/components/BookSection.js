import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup} from "react-bootstrap";
import BooksList from "./BooksList"
import PaginationComp from "./PaginationComp";
import NavabarComp from "./NavabarComp";
const BookSection = () => {


  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(20);

  const fetchBooks = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5000/books", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    setBooks(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    /*
   * Get current Books
   */
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);
  
    /*
     * Change Page
     */
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

  return (
    <div>
      <NavabarComp />
      <Container>
        <Row>
          <Col md={2}>
            <ListGroup className="mt-4">
              <ListGroup.Item as={Link} to="/admin-dashboard" variant="info">
                Account
              </ListGroup.Item>
              <ListGroup.Item variant="info">Users</ListGroup.Item>
              <ListGroup.Item as={Link} to="/book-section" variant="info" active>
                Books
              </ListGroup.Item>
              <ListGroup.Item as={Link} to="/issued-books" variant="info">
                Issued Books
              </ListGroup.Item>
              <ListGroup.Item as={Link} to="/admin-books" variant="info">
                My Books
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={10}>

            {books && <BooksList books={currentBooks} loading={loading}/>}
            <PaginationComp booksPerPage={booksPerPage} totalBooks={books.length} paginate={paginate}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookSection;
