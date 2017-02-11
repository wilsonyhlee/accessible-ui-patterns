import React, { Component } from 'react';

import EgCard from '../../components/EgCard/EgCard.js';
import SVG from '../../components/SVG/SVG.js';

const content = (
  <div>
  </div>
);

const id = "aisComplexShapeShuffle";
const size = 1000;

const states = {
  active: {button: "rectangle", text: "Following"},
  inactive: {button: "plus", text: "Follow"}
};

class AisComplexElement extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shuffle: true
    };
  }

  componentDidMount() {
    const yTop = 10;
    const yBottom = 60;
    const svg = d3.select(`#${id}`)
      .on("click", () => {
        path12.transition().duration(500).attr("y2", this.state.shuffle ? yBottom-6 : yTop);
        path22.transition().duration(500).attr("y2", this.state.shuffle? yTop+6: yBottom);
        this.setState({shuffle: !this.state.shuffle});
      });
    const marker = svg.append("defs").append("marker")
      .attr({id: "arrow", markerWidth: "10", markerHeight: "10", refX: "0",
        refY: "3", orient: "auto", markerUnits: "strokeWidth"});
    marker.append("path").attr({d: "M0,0 L0,6 L9,3 z", fill: "black"});
    const g = svg.append('g');
    const path11 = g.append("line")
      .attr({x1: 10, x2: 40, y1:yTop, y2:yTop, stroke: "black", "stroke-width": "2px"});

    const path12 = g.append("line")
      .attr({x1: 40, x2: 90, y1:yTop, y2:yTop, stroke: "black", "stroke-width": "2px", "marker-end":"url(#arrow)"});

    const path21 = g.append("line")
      .attr({x1: 10, x2: 40, y1:yBottom, y2:yBottom, stroke: "black", "stroke-width": "2px"});

    const path22 = g.append("line")
      .attr({x1: 40, x2: 90, y1:yBottom, y2:yBottom, stroke: "black", "stroke-width": "2px", "marker-end":"url(#arrow)"});
  }
  render() {
    const svg = (
      <div style={{ margin: "20px 0 0 20px" }}>
        <SVG
          id={id}
          width="200px"
          height="100px"
          role="button"
          ariaLabel="follow button"
          title="follow button"
          description="this button follows the account" />
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
