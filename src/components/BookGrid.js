import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BookGrid extends React.Component {

    static propTypes = {
		books: PropTypes.array.isRequired,
		updateShelf: PropTypes.func.isRequired
	}
    
    render() {
        return(
            <ol className="books-grid">
                {this.props.books && this.props.books.length > 0 && this.props.books.map((book) =>
                    <li key={book.id}>
                        <Book bookItem={book} updateShelf={this.props.updateShelf}/>
                    </li>
            )}
            </ol>
      )
    }
}

export default BookGrid