import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  render() {
    console.log(this.state.query)
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={event => {
                this.updateQuery(event.target.value);
                this.props.onSearch(this.state.query);
              }} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.books && this.props.books.length > 0 && this.props.books.map(
                book => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div
                          className="book-cover"
                          style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})`
                          }}
                        />
                        <div className="book-shelf-changer">
                          <select
                            onChange={event => {
                              this.props.onChangeShelf(book, event.target.value)
                            }}
                            defaultValue={book.shelf}>
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
                      <div className="book-authors">
                        {book.authors && book.authors[0]}
                      </div>
                      <div className="book-authors">
                        {book.authors && book.authors[1]}
                      </div>
                    </div>
                  </li>
                )
              )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks