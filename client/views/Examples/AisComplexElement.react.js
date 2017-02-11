import React, { Component } from 'react';

import EgCard from '../../components/EgCard/EgCard.js';
import SVG from '../../components/SVG/SVG.js';

const content = (
  <div>
  </div>
);

const id = "aisComplexShape";
const size = 1000;

const states = {
  active: {button: "rectangle", text: "Following"},
  inactive: {button: "plus", text: "Follow"}
};

class AisComplexElement extends Component {

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
    svg.append("path")
      .attr({
        class: "complexShapeButton",
        stroke: "#FFF",
        fill: "#FFF",
        transform: "translate(60,50)",
        d: this.getShapeData(states[this.state.following].button)
      })
    d3.select("#following-button")
      .on("click", () => {
        const newState = this.state.following === 'inactive' ? 'active' : 'inactive';
        this.setState({following: newState});
        d3.select(".complexShapeButton")
          .transition()
          .duration(500)
          .attr({d: this.getShapeData(states[newState].button)})})
  }
  render() {
    const svg = (
      <div
        id="following-button"
        className="waves-effect waves-light"
        style={{ display: "inline-block", height: "100px", width: "300px", background: "#26a69a"}}
      >
        <SVG
          id={id}
          width="100px"
          height="100px"
          role="button"
          ariaLabel="follow button"
          title="follow button"
          description="this button follows the account" />
        <span
          style={{ position: "absolute", left: "110px", color: "#FFF",
          top: "20px", fontSize: "40px"}}
        >
          {states[this.state.following].text}
        </span>
      </div>
    );
    return (
      <EgCard
        title="Animated Intermediate States (Complex Element)"
        content={content}
        svg={svg} />
    );
  }
}

export default AisComplexElement;
