
import React, { useContext } from 'react';
import { ApiDataContext } from '../context/ApiDataContext';
import PostItem from './PostItem'
import './PostList.css'


const PostList = () => {

  const { apiData } = useContext(ApiDataContext);

  return (
    <div className='post-container'>
    {apiData.posts.map((postData) => (
    <PostItem post = {postData}/>
    ))}
    </div>
  )
}

export default PostList