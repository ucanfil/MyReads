import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Books from './Books'
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchResults: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    });
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    this.setState(state => ({
      books: state.books.map(c => {
        if (c.id === book.id) {
          c.shelf = shelf
        } else if (book.id !== c.id) {
          state.books.push(book)
        }
        return c
      })
    }))
  }

  search = query => {
    BooksAPI.search(query).then(result =>
      this.setState({ searchResults: result })
    )
  };

  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              searchResults={this.state.searchResults}
              books={this.state.books}
              onChangeShelf={this.changeShelf}
              onSearch={this.search}
            />
          )}
        />

        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <BookShelf title="Currently Reading">
                    <Books
                      books={this.state.books}
                      onChangeShelf={this.changeShelf}
                      shelf="currentlyReading"
                    />
                  </BookShelf>
                  <BookShelf title="Want to Read">
                    <Books
                      books={this.state.books}
                      onChangeShelf={this.changeShelf}
                      shelf="wantToRead"
                    />
                  </BookShelf>
                  <BookShelf title="Read">
                    <Books
                      books={this.state.books}
                      onChangeShelf={this.changeShelf}
                      shelf="read"
                    />
                  </BookShelf>
                </div>
              </div>
              <div className="open-search">
                <Link
                  to="/search"
                  onClick={() =>
                    this.setState({
                      showSearchPage: true
                    })
                  }
                >
                  Add a book
                </Link>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp
