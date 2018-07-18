import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchBooks extends Component {
  static propTypes = {
    searchResults: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    onSearch: PropTypes.func.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query })
  }

  render() {
    const { searchResults, books, onSearch, onChangeShelf } = this.props
    const { query } = this.state

    if (searchResults && searchResults.length > 0) {
      for (let i = 0; i < searchResults.length; i++) {
        for (let j = 0; j < books.length; j++) {
          if (searchResults[i].id === books[j].id) {
            searchResults[i].shelf = books[j].shelf
          }
        }
      }
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => {
                this.updateQuery(event.target.value);
                onSearch(query);
              }} />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResults && searchResults.length > 0 && query && searchResults.map(
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
                              onChangeShelf(book, event.target.value)
                            }}
                            defaultValue={book.shelf === undefined ? 'none' : book.shelf}>
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