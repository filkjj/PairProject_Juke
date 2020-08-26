import React from 'react'
import SideBar from './sidebar'
import AllAlbums from './AllAlbums'
import Player from './Player'
import axios from 'axios'

export default class Main extends React.Component {
 constructor(){
   super();
   this.state ={
    albums : [] 
  }
 }

 async componentDidMount(){
  const data = await axios.get('/api/albums');
  this.setState({albums:data.data});
 }

  render () {
    return (
    <div id='main' className='row container'>
      <SideBar />
      <div class='container'>
      <AllAlbums albums={this.state.albums}/>
      <Player />
      </div>
    </div>
    )
  }
}
