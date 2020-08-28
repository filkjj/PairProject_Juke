import React from 'react'

const AllAlbums = ({albums, selectAlbum}) =>{
    return(
        <div id='albums' className='row wrap'>
        {albums.map(album=>{
        return(<div key={album.id} onClick={()=>selectAlbum(album)} className='album'>
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




 