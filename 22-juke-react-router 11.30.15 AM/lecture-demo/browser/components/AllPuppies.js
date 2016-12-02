import React from 'react';
import axios from 'axios';

class AllPuppies extends React.Component {
  constructor () {
    super();
    this.state = {puppies: []};
  }
  componentDidMount () {
    axios.get('/api/puppies')
    .then(response => {
      this.setState({
        puppies: response.data
      });
    });
  }
  render () {
    return (
      <div>
        <ul>
          {this.state.puppies.map(puppy => {
            return (
              <li key={puppy.name}>
                <a
                  href='#'
                  onClick={() => {
                    this.props.showOne(puppy);
                  }}>
                  {puppy.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default AllPuppies;
