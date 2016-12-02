import React from 'react';
import { Link } from 'react-router';

import Albums from './Albums';
import Songs from './Songs';

class Artist extends React.Component {

  componentDidMount() {
    
  }
  render() {
    return (
      <div>
        <h3>{this.props.artist.name}</h3>
        <h4>ALBUMS</h4>

        <h4>SONGS</h4>
      </div>
    );
  }
}

export default Artist;