import React from 'react';

import OnePuppy from './OnePuppy';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      selectedPuppy: {}
    };
  }
  render () {
    return (
      <div>
        <div className='dev-border'>
          <a
            className='dev-border'
            href='/#/all-puppies'>
            Show me ALL THE PUPPIES
          </a>
          <a
            className='dev-border'
            href='/#/about'>
            What are you about?
          </a>
        </div>
        <div className='dev-border'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
