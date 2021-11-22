import React from "react";
import { Table } from "react-bootstrap";
import moment from 'moment'

const BooksList = ({ books, loading }) => {
  if (loading) {
    return <h2>loading...</h2>
  }
  return (
    <div>
      <Table className="mt-4" striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Isbn</th>
            <th>Page Count</th>
            <th>Published Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{book.title}</td>
              <td>{book.isbn}</td>
              <td>{book.pageCount}</td>
              <td>{moment(book.publishedDate).format('DD-MM-YYYY')}</td>
              <td>{book.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BooksList;
