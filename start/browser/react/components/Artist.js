import React from 'react';
import { Link } from 'react-router';

import Albums from './Albums';
import Songs from './Songs';

class Artist extends React.Component {
  // constructor(){
  //   this.state = {
  //     selectedArtistAlbums: [],
  //     selectedArtistSongs: []
  //   }
  // }


  componentDidMount() {
    const artistId = this.props.routeParams.artistId;
    const selectArtist = this.props.selectArtist;
    const getArtistAlbums = this.props.getArtistAlbums;
    const getArtistSongs = this.props.getArtistSongs;

    selectArtist(artistId);
    getArtistAlbums(artistId);
    getArtistSongs(artistId);

  }
  render() {
    console.log("this.props from artist.js", this.props);
    return (
      <div>
        <h3>{this.props.artist.name}</h3>
        <Albums albums={this.props.selectedArtistAlbums}/>
        <Songs songs={this.props.selectedArtistSongs}/>
      </div>
    );
  }
}

export default Artist;