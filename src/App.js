import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './components/Bookshelf'
import BookSearch from './components/BookSearch'
import {Link , Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => 
    this.setState({books : books}));
  }

  getBookByCategory(categoryId)
  {
    return this.state.books.filter((book) => book.shelf === categoryId)
  }

  toggleSearchPage = (value) => {
    this.setState({ showSearchPage: value })
  }
  
  updateShelf = (book, value) => {
    const bookIndex = this.state.books.findIndex((b) => b.id === book.id);
    const bookList = this.state.books;

    console.log(value);

    if(bookIndex === -1)
    {
      book.shelf = value;
      bookList.push(book);
    }
    else{
      bookList[bookIndex].shelf = value
    }
    this.setState({
      books: bookList
    })
    
    BooksAPI.update(book, value)
  }

  render() {
    const categoriesDict = {
      currentlyReading : 'Currently Reading',
      wantToRead : 'Want to Read',
      read : 'Read',
    }
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Route path='/search' render={() => (
            <BookSearch toggleSearchPage={this.toggleSearchPage} updateShelf={this.updateShelf} myBooks={this.state.books}/>)}
          />
        ) : (
          <Route path='/' render={() => (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              {Object.keys(categoriesDict).map((categoryKey)=>(
                <Bookshelf key={categoryKey} className="bookshelf" bookshelfTitle={categoriesDict[`${categoryKey}`]} updateShelf={this.updateShelf} books={this.getBookByCategory(categoryKey)} />
              ))}
              </div>
            </div>
            <div className="open-search">
              <Link to='/search' onClick={() => this.toggleSearchPage(true)}>Add a book</Link>
            </div>
          </div>
          )}/>
        )}
      </div>
    )
  }
}

export default BooksApp
