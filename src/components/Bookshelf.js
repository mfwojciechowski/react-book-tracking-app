import React from 'react'
import BookGrid from './BookGrid'
import PropTypes from 'prop-types'

class Bookshelf extends React.Component {
    static propTypes = {
		bookshelfTitle: PropTypes.string.isRequired,
        updateShelf: PropTypes.func.isRequired,
        books: PropTypes.array.isRequired
	}

    render() {
        return(            
        <div className="bookshelf">
            <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
            <div className="bookshelf-books">
                <BookGrid books={this.props.books} updateShelf={this.props.updateShelf}/>      
            </div>
        </div>
      )
    }
}

export default Bookshelf