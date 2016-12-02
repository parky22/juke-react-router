import React from 'react';

class OnePuppy extends React.Component {
  render () {
    return (
      <div>
        <h3>{this.props.puppy.name}</h3>
      </div>
    );
  }
}

export default OnePuppy;
