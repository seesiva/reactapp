import React, { Component } from 'react';
import './App.css';
{ /* import logo from './logo.svg'; */}

class Developer{
  constructor(firstname, lastname){
    this.firstname=firstname;
    this.lastname=lastname;
  }
  getName(){
    return this.firstname+' '+this.lastname;
  }
}
const siva= new Developer('Siva Karthikeyan','Krishnan');

const list=[{
  title: 'React',
  url: 'https://facebook.github.io/react',
  author: 'jordan wake',
  num_comments: 0,
  points:4,
  objectID:0,
},
{
  title: 'Redux',
  url: 'https://facebook.github.io/reactjs/redux',
  author: 'Dan Abramov, Andrew Clarke',
  num_comments: 2,
  points:5,
  objectID:1,
}]
class App extends Component {

  render() {
    
    return (
      <div className="App">
        {
         
          list.map(item=>{
          <div key={item.objectID}> 
          <span>{siva.firstname}</span>
          <span>
            <a href={item.url}>{item.title} </a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            </div>
        })}
      </div>
    );
  }
}

export default App;
