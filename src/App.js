import React, { Component } from "react";
import pics from "./pics.json"
import ImageContainer from "./components/ImageContainer";
import ImgCards from "./components/ImgCards"

class App extends Component {
  state = {
    pics
  };

  shuffle = array => {
    console.log("shuffle");
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  }

  shuffleImages = pics => {
    console.log("shuffle");
    console.log(pics);
    this.shuffle(pics);
    this.setState({ pics: pics})
    console.log(this.state.pics);
  }

  render() {
    return (
      <ImageContainer>
        {this.state.pics.map(img => (
          <ImgCards
          key={img.id}
          name={img.name}
          image={img.image}
          onClick={() => this.shuffle(this.state.pics)}
          />
        ))}
      </ImageContainer>
    )
  }
}


export default App;