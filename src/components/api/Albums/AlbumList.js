import React, {useContext} from 'react'
import { ApiDataContext } from '../context/ApiDataContext'
import AlbumItem from './AlbumItem'

const AlbumList = () => {
    const {apiData} = useContext(ApiDataContext)

    const matchedData = apiData.albums.map((album)=> {
        const matchedPhotos = apiData.photos.filter((photo) => album.id === photo.albumId)
        return {album, photos:matchedPhotos}
    })

    
  return (
    <div>
        {matchedData.map((data,index)=> (
            <AlbumItem index={index} album={data.album} photos={data.photos}/>
        ))}
    </div>
  )
}

export default AlbumList