import React from 'react'
import SideBar from './sidebar'
import AllAlbums from './AllAlbums'
import SingleAlbum from './SingleAlbum'
import Player from './Player'
import axios from 'axios'

export default class Main extends React.Component {
 constructor(){
   super();
   this.state ={
    albums : [] ,
    selectedAlbum: {}
  }
  this.selectAlbum = this.selectAlbum.bind(this)
  this.changeBackToEmpty = this.changeBackToEmpty.bind(this);
 }

 async componentDidMount(){
  const data = await axios.get('/api/albums');
  this.setState({albums:data.data});
 }
 async selectAlbum(album) {
    const albumPlusSongs = await axios.get(`/api/albums/${album.id}`)
    this.setState({ selectedAlbum: albumPlusSongs.data })
 }
 returnedAlbumState() {
  if (Object.keys(this.state.selectedAlbum).length === 0) {
    return(<AllAlbums albums={this.state.albums} selectAlbum={ this.selectAlbum }/> )
  }
  else {
    return(<SingleAlbum album={this.state.selectedAlbum} />)
  }
}

changeBackToEmpty(){
  this.setState({ selectedAlbum: {} })
}

  render () {
    return (
    <div id='main' className='row container'>
      <SideBar changeBackToEmpty={this.changeBackToEmpty} />
      <div className='container'>
      { this.returnedAlbumState()}
      <Player />
      </div>
    </div>
    )
  }
}

