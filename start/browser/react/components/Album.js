import React from 'react';
import Songs from '../components/Songs';

// //Album
// album: this.state.selectedAlbum,
// currentSong: this.state.currentSong,
// isPlaying: this.state.isPlaying,
// toggle: this.toggleOne,
// //Albums
// albums: this.state.albums,
// selectAlbum: this.selectAlbum


class Album extends React.Component {
  constructor(){
    super();
    //this.state?
   this.album = this.props.album;
   this.currentSong = this.props.currentSong;
   this.isPlaying = this.props.isPlaying;
   this.toggleOne = this.props.toggleOne;
  }


  componentDidMount(){
    const albumId = this.props.routeParams.albumId;
    const selectAlbum = this.props.selectAlbum;

    selectAlbum(albumId);
  }

  render(){
    return (
    <div className="album">
      <div>
        <h3>{ album.name }</h3>
        <img src={ album.imageUrl } className="img-thumbnail" />
      </div>
      <Songs
        songs={album.songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleOne={toggleOne} />
    </div>
    );
  }
}

export default Album;
