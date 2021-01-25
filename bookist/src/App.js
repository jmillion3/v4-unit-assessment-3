// import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import BookList from './components/BookList'
import Shelf from './components/Shelf'
import data from './data';

class App{
  constuctor(){
    this.state = {
      books: data
    }
  }

  render(){
    return ( 
      <div className="App">
          <Header />
        <div className="content">
          <BookList 
          books={data[this.state.books]}/>
          <Shelf />
        </div>
      </div>
    );
  }
  
    
}

export default App;
