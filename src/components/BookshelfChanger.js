import React from 'react'
import PropTypes from 'prop-types'
// import * as BooksAPI from './BooksAPI'

class BookshelfChanger extends React.Component {
    static propTypes = {
		books: PropTypes.object.isRequired,
		updateShelf: PropTypes.func.isRequired
	}

    render() {
        return(
        <div className="book-shelf-changer">
            <select onChange={(event) => this.props.updateShelf(this.props.book, event.target.value)} value={this.props.book.shelf || "none"}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
      </div>
      )
    }
}

export default BookshelfChanger