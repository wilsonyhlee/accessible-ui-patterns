import React from 'react';

import EgCard from '../../components/EgCard/EgCard.js';
import SVG from '../../components/SVG/SVG.js';

const id = "colorContrast";
const content = (
  <div>
    <div>
      The W3C recommends the following contrast ratios for body text and image text:
    </div>
    <ul className="collection">
      <li className="collection-item">Small text should have a contrast ratio of at least 4.5:1 against its background.</li>
      <li className="collection-item">Large text (at 14 pt bold/18 pt regular and up) should have a contrast ratio of at least 3:1 against its background.</li>
    </ul>
  </div>
);

class ColorContrast extends React.Component {
  componentDidMount() {
    const svg = d3.select(`#${id}`);
    svg.append("rectangle");
  }
  render() {
    const svg = (
      <SVG
        id={id}
        width="100%"
        height="200px"
        role="button"
        ariaLabel="play button"
        title="audio play button"
        description="this button starts and pauses the audio"
        />
    );
    return (
      <EgCard
        title="Color Contrast"
        content={content}
        svg={svg} />
    );
  }
}

export default ColorContrast;
