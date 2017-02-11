import React from 'react';

import { Link } from 'react-router'

class EgCard extends React.Component {
  render() {
    const { title, content, svg } = this.props;

    return (
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light" style={{ height: "200px", padding: "20px"}}>
            {svg}
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {title}
              <i className="material-icons right">more_vert</i></span>
            <p>
          </p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              {title}
              <i className="material-icons right">close</i></span>
              {content}
          </div>
        </div>
      </div>
    )
  }
}

export default EgCard;
