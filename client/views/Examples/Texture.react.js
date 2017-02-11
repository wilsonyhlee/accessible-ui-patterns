import React, { Component } from 'react';

import EgCard from '../../components/EgCard/EgCard.js';
import SVG from '../../components/SVG/SVG.js';

const content = (
  <div>
  </div>
);

const id = "texture";
const size = 1000;

const states = {
  active: {text: "Home"},
  inactive: {text: "Home"}
};

class Texture extends Component {

  constructor(props) {
    super(props);
    this.state = {
      following: "inactive"
    };
  }

  getShapeData = (type) => {
    return d3.superformula()
      .type(type)
      .size(size * 2)
      .segments(360)
  };

  componentDidMount() {
    const svg = d3.select(`#${id}`);
    d3.select("#home-button")
      .on("click", () => {
        const newState = this.state.following === 'inactive' ? 'active' : 'inactive';
        this.setState({following: newState});
      });
  }
  render() {
    const svg = (
      <div
        id="home-button"
        className={`waves-effect waves-light texture-button ${this.state.following}`}
        style={{ display: "inline-block", height: "100px", width: "300px"}}
        >
        <span
          style={{ position: "absolute", left: "96.5px", color: "#FFF",
          top: "20px", fontSize: "40px"}}
        >
          {states[this.state.following].text}
        </span>
      </div>
    );
    return (
      <EgCard
        title="Texture"
        content={content}
        svg={svg} />
    );
  }
}

export default Texture;
