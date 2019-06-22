import React, { Component } from "react";
import pics from "./pics.json"
import ImageContainer from "./components/ImageContainer";
import ImgCard from "./components/ImgCard"

class App extends Component {
  state = {
    pics: pics,
    currentScore: 0,
    topScore: 0
  };

  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  }

  shuffleImages = () => {
    const pics = this.shuffle(this.state.pics);
    this.setState({ pics })
  }

  render() {
    return (
      <ImageContainer>
        {this.state.pics.map(img => (
          <ImgCard 
          shuffleImages={this.shuffleImages}
          key={img.id}
          name={img.name}
          image={img.image}
          />
        ))}
      </ImageContainer>
    )
  }
}


export default App;