import React from 'react'
import { Post } from "../store/api"

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="post-card" style={{
      padding: '16px',
      margin: '8px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: 'white'
    }}>
      <div className="post-content" style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '8px'
      }}>
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
      </div>
    </div>
  )
}
