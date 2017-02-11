import React, { Component } from 'react';

import EgCard from '../../components/EgCard/EgCard.js';
import SVG from '../../components/SVG/SVG.js';

const content = (
  <div>
  </div>
);

const id = "aisSimpleShape";
const size = 1000;

class AisSimpleShape extends Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonState: 'triangle'
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
    svg.append("path")
      .attr({
        class: "simpleShapeButton",
        stroke: "#26a69a",
        fill: "#26a69a",
        transform: "translate(60,50)",
        d: this.getShapeData(this.state.buttonState)
      })
      .on("click", () => {
        const newState = this.state.buttonState === 'triangle' ? 'square' : 'triangle';
        this.setState({buttonState: newState});
        d3.select(".simpleShapeButton")
          .transition()
          .duration(500)
          .attr({d: this.getShapeData(newState)})})
  }
  render() {
    const svg = (
      <SVG
        id={id}
        classes="waves-effect waves-light"
        width="100px"
        height="100px"
        role="button"
        ariaLabel="play button"
        title="audio play button"
        description="this button starts and pauses the audio"
      />
    );
    return (
      <EgCard
        title="Animated Intermediate States (Simple Element)"
        content={content}
        svg={svg} />
    );
  }
}

export default AisSimpleShape;
