import React from 'react'

const AlbumItem = ({index, album, photos}) => {
  return (
    <div key={index}>
      <p>ID: {album.id}</p>
      <h3>Title: {album.title}</h3>
      <p>User ID {album.userId}</p>
      {photos.map((photo)=> (
      <div key={photo.id}>
      <h4>ID: {photo.id} Image: {photo.title}</h4>
      <img src={photo.url}/>
      </div>
      )
      )}
    </div>
  )
}

export default AlbumItem