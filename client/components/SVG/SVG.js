import React, { Component, PropTypes } from 'react';

class SVG extends Component {
  render() {
    const { id, classes, height, width, role, ariaLabel, title, description, children } = this.props;
    return (
      <svg
        id={id}
        className={classes}
        height={height}
        width={width}
        role={role}
        aria-label={ariaLabel}
      >
        <title>{title}</title>
        <desc>{description}</desc>
        {children}
      </svg>
    );

  }
}

SVG.propTypes = {
  id: PropTypes.string.isRequired,
  classes: PropTypes.string,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default SVG;
