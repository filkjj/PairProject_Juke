import React from 'react'

const AllAlbums = ({albums}) =>{
    return(
        <div id='albums' class='row wrap'>
        {albums.map(album=>{
        return(<div key={album.id} class='album'>
        <a>
            <img src={album.artworkUrl} />
            <p>{album.name}</p>
            <small>{album.artist.name}</small>
        </a>
        </div>)
        })}
         </div>
)}

export default AllAlbums




 