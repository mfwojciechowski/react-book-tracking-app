import React from 'react'
import * as BooksAPI from '../BooksAPI'
import BookGrid from './BookGrid'
import BookNotFound from './BookNotFound'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class BookSearch extends React.Component {
    state = {
        searchedBooks: [],
        query: ""
    }
    
    handleChange = (query) => {
        this.setState(() => ({ query: query }))
        this.search(query)
    }

    search = (query) => {
        BooksAPI.search(query).then((res) => {
            if(res) {
                for (let i = 0; i < res.length; i++) {
                    for (let j = 0; j < this.props.myBooks.length; j++) {
                        if (res[i].id === this.props.myBooks[j].id) {
                            const onMyShelfBookId = this.props.myBooks.findIndex((book) => book.id === res[i].id)
                            res[i].shelf = this.props.myBooks[onMyShelfBookId].shelf
                        }
                    }
                }
            }
            this.setState({ searchedBooks: res })
        })			
    }

    static propTypes = {
		searchedBooks: PropTypes.array.isRequired,
        toggleSearchPage: PropTypes.func.isRequired,
        updateShelf: PropTypes.func.isRequired
	}

    render() {
        return(            
        <div className="search-books">
            <div className="search-books-bar">
              <Link to='/'className="close-search" onClick={() => this.props.toggleSearchPage(false)}>Close</Link>
              <div className="search-books-input-wrapper">
                <input 
                    type="text" 
                    placeholder="Search by title or author"
                    value={this.state.query}
                    onChange={(event)=>this.handleChange(event.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              {((this.state.searchedBooks && this.state.searchedBooks.length) >0 || this.state.query === '') ? <BookGrid books={this.state.searchedBooks} updateShelf={this.props.updateShelf}/> : <BookNotFound/> }
            </div>
        </div>
      )
    }
}

export default BookSearch