# MyReads Project

Udacity provided a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. Interactivity added to the app by refactoring the static code using react.

## Getting Started

To get started developing right away, for the repo from [here](https://github.com/ucanfil/MyReads) to your system and style and add functionalities as you wish. Inside of your folder:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Backend Server

App has a backend server provided by Udacity to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

### Prerequisities

You need a modern browser and run a local server. Because of application was created with create-react-app, you can simply run "npm start" in your local repository to start local server at port number: 3000.

## Features

* The main page shows 3 shelves for books, and each book is shown on the correct shelf.
* The main page shows a control that allows users to move books between shelves.
* When the browser is refreshed, the same information is displayed on the page.
* Search page have search input that lets users search for books.
* Search results allow a user to categorize a book.("Currently Reading", "Want to Read", "Read")
* When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.

## Built With

* React
* React router

## Authors

  - Burak Tilek - [Ucanfil](https://github.com/ucanfil)

## Acknowledgements

* Static version of the application provided by [Udacity](https://github.com/udacity/reactnd-project-myreads-starter)
