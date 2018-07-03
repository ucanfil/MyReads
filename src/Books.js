import React, { Component } from "react"
import PropTypes from 'prop-types'

class Books extends Component {

  render() {
    const showingBooks = this.props.books.filter(c => c.shelf === this.props.shelf)

    return <div className="bookshelf-books">
        <ol className="books-grid">
          {showingBooks.map(book => <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }} />
                  <div className="book-shelf-changer">
                    <select
                      onChange={event => {
                      this.props.onChangeShelf(book, event.target.value);
                    }}
                      defaultValue={this.props.shelf}>
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

Books.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default Books