import React from 'react';
import { Link } from 'react-router'

import Header from '../components/Header/Header.js';

class Home extends React.Component {
  render () {
    return (
      <Header active="Home" />
    );
  }
}

export default Home;
