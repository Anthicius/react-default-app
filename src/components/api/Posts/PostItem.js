import React from 'react';
import "./PostItem.css"

const PostItem = ({post}) => {
  console.log(post)
    return (
      (post ?       
                <div key={post.id} className='post-wrapper'>
                    <div className='post-id'>Post: {post.id}</div>
                    <div className='post-content'>
                        <div className='post-title'><h2>{post.title}</h2></div>
                        <div className='post-body'><p>{post.body}</p></div>
                        <div className='user-id'>User ID {post.userId}</div>
                    </div>
                </div>
        :
        <div>Loading data...</div>
      )
    )
};

export default PostItem;
