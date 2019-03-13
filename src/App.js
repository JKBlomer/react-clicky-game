import React, { Component } from 'react';

import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Image from "./components/Image";
import source from "./source.json";

class App extends Component {

state = {
  clicks: 0,
  score: 0,
  header: "Click an image to begin!",
  imageArray: [-1],
  source: source,
  isImage: false
 
}



componentDidMount(){
  this.shuffleFunction();
  
}

shuffleFunction =()=>{
    const imagesSource = source.sort(() => Math.random() - 0.5); 
    this.setState({source: imagesSource}); 
}

increaseClicks =()=>{
  this.setState({header:"Correct!!"});
  this.setState({clicks: this.state.clicks + 1});
  if(this.state.clicks >= this.state.score){
    this.setState({score: this.state.score + 1});
  }
  
}

holdID = (id) =>{
      
  const newArray = this.state.imageArray;
  newArray.push(parseInt(id));
  this.setState({imageArray: newArray});
      
}


checkArray(num){
  
  let stuff = false;
  this.state.imageArray.filter(n => {
    
      if(n === parseInt(num)){
        console.log("matches");
        stuff = true;
      }
  });

  if(stuff){
    
    this.setState({header: "Already clicked!"})
    this.setState({clicks:0});
    const newArray = [];
    this.setState({imageArray: newArray});

  } else {
    this.increaseClicks();
    this.holdID(num);
  }
  
}

clickFunction =(event)=>{
  
  this.shuffleFunction();
  this.checkArray(event.target.id);
 
  
}

  render() {
    return (
      <div className="App">
        <Header clicks={this.state.clicks} score={this.state.score} header={this.state.header} />
         <Hero/>
         <Section>
          {this.state.source.map(src=>(
            <Image
              source={src.imageSource}
              id={src.id}
              isImage={this.state.isImage}
              click={this.clickFunction}
              
            />)
          )
          }
         </Section>
         <Footer/>
      </div>
    );
  }
}

export default App;
