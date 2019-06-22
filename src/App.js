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
    console.log(id);
    console.log("id in shuffleImages");
    let pics = this.shuffle(this.state.pics);
    this.setState({ pics }, this.checkScore(id));
  }

  checkScore = clickedId => {
    console.log("checking score");
    console.log(clickedId);
    console.log("clickedId in checkScore");
    let clickedArray = this.state.clicked;
    console.log(clickedArray);
    console.log(clickedArray.includes(clickedId));

    if (clickedArray.includes(clickedId)) {
      alert("Try again!");
      if (this.state.currentScore > this.state.topScore) {
        this.setState({
          topScore: this.state.currentScore,
          currentScore: 0,
          clicked: []
        });
      }
    } else {
      this.state.clicked.push(clickedId);
      console.log(clickedId);
      this.setState({
        clicked: this.state.clicked,
        currentScore: this.state.currentScore + 1
      });
      console.log(this.state.clicked);
      console.log("this.state.clicked");
    }
    console.log(clickedArray);
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