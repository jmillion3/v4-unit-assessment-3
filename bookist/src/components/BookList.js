import React, {Component} from 'react'
import Shelf from './Shelf';

class BookList extends Component{
    constructor(){
        super();
        this.state = {
            books: data
        } 
    }

    render() {
        const{id, title, author, img} = this.props.books
        
        return (
            <div className="bookList">
                <img src={img}></img>
                <p>{id}{title} by {author}</p>
            </div>
        )
    }
}
export default BookList;