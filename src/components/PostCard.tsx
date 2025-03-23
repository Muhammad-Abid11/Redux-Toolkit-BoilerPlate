import React, { useState } from 'react'
import { Post, useDeletePostMutation, useUpdatePostMutation } from "../store/api"

export const PostCard = ({ post }: { post: Post }) => {
  const [deletePost] = useDeletePostMutation(); 
  const [updatePost] = useUpdatePostMutation(); // use the updatePost mutation
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleDeletePost = async(id: number) => {
    try {
      await deletePost(id); // call the deletePost mutation
    } catch (error) {
      console.error(error);
    }

  }

  const handleUpdate = async () => {
    try {
      await updatePost({ id: post.id, title, body }); // call the updatePost mutation
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="post-card" style={{
      padding: '16px',
      margin: '8px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: 'white'
    }}>
      {isEditing ? (
        <div>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea value={body} onChange={(e) => setBody(e.target.value)} />
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <div>
        <span className="post-label" style={{
          fontWeight: 'bold',
          color: '#333',
          minWidth: '120px'
        }}>
          {post.title}:
        </span>
        <span className="post-value" style={{
          color: '#666',
          flex: 1
        }}>
          {post.body}
        </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    )}
    <button 
      onClick={() => handleDeletePost(post.id)} 
      style={{ 
        border: 'none', 
        background: 'none', 
        cursor: 'pointer',
        color: '#ff4444'
      }}
    >
      🗑️
    </button>
    </div>
  )
}

/* 
NOTE:
  - Delete/Update operation is works on the data that is already in the cache but not with the new data that we create after server starts. (means if we create a new post after server starts then we can't update/delete that post)
  - To solve this issue we have to use the "invalidatesTags" property in the mutation function. (not works)

*/