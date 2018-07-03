import React, { Component } from 'react'

class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        {this.props.children}
      </div>
    )
  }
}

export default BookShelf