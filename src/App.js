import React, { Component } from "react";
import pics from "./pics.json"
import ImageContainer from "./components/ImageContainer";
import ImgCard from "./components/ImgCard";
import NavBar from "./components/NavBar/NavBar";


class App extends Component {
  state = {
    pics: pics,
    currentScore: 0,
    topScore: 0,
    clicked: []
  };

  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  }

  shuffleImages = event => {
    let id = parseInt(event.target.id);
    let pics = this.shuffle(this.state.pics);
    this.setState({ pics }, this.checkScore(id));
  }

  checkScore = clickedId => {
    let clickedArray = this.state.clicked;

    if (this.state.currentScore > this.state.topScore) {
      this.setState({
        topScore: this.state.currentScore
      })
    }
    
    if (clickedArray.includes(clickedId)) {
      alert("Try again!");
        this.setState({
          currentScore: 0,
          clicked: []
        })
      }
     else {
      this.state.clicked.push(clickedId);
      this.setState({
        clicked: this.state.clicked,
        currentScore: this.state.currentScore + 1
      });
    }

    if (this.state.clicked.length === 10) {
      alert("Congratulations on clicking each picture only once! Can you do it again?");
      this.setState({
        clicked: [],
        currentScore: 0
      });
    }
  }

  render() {
    return (
      <div>
        <NavBar 
        currentScore={this.state.currentScore}
        topScore={this.state.topScore}
        />
        <ImageContainer>
          {this.state.pics.map(img => (
            <ImgCard
              shuffleImages={this.shuffleImages}
              id={img.id}
              key={img.id}
              name={img.name}
              image={img.image}
            />
          ))}
        </ImageContainer>
      </div>
    )
  }
}


export default App;