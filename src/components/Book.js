import React from 'react'
import BookshelfChanger from './BookshelfChanger'
// import * as BooksAPI from './BooksAPI'

class Book extends React.Component {

    render() {
      const { bookItem, updateShelf} = this.props;
        return(
        <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:((bookItem.imageLinks && bookItem.imageLinks.smallThumbnail) ? `url(${bookItem.imageLinks.smallThumbnail})` : "none")}}></div>
                <BookshelfChanger updateShelf={updateShelf} book={bookItem}/>
            </div>
            <div className="book-title">{bookItem.title}</div>
            <div className="book-authors">{ (bookItem.authors && bookItem.authors.length) > 1 ? bookItem.authors.join(", ") : bookItem.authors}</div>
        </div>
      )
    }
}

export default Book