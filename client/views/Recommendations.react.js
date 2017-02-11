import React from 'react';

import Header from '../components/Header/Header.js';

// example components
import ColorContrast from '../views/Examples/ColorContrast.react';
import Texture from '../views/Examples/Texture.react';
import AisSimpleElement from './Examples/AisSimpleElement.react.js';
import AisComplexElement from './Examples/AisComplexElement.react.js';
import AisComplexElementShuffle from './Examples/AisComplexElementShuffle.react.js';

class Recommendations extends React.Component {
  render() {
    return (
      <div>
        <Header active="Recommendations" />
        <div className="row">
          <ColorContrast />
          <Texture />
        </div>
        <div className="row">
          <AisSimpleElement />
          <AisComplexElement />
        </div>
        <div className="row">
          <AisComplexElementShuffle />
        </div>
      </div>
    )
  }
}

export default Recommendations;
