import React, { Component } from "react";
// import PropTypes from 'prop-types'

class Books extends Component {

  render() {
    return <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.books.map(book => <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }} />
                  <div className="book-shelf-changer">
                    <select onChange={event => this.props.onChangeShelf(book, event.target.value)}>
                      <option value="move" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors[0]}</div>
                <div className="book-authors">{book.authors[1]}</div>
              </div>
            </li>)}
        </ol>
      </div>;
  }
}

export default Books