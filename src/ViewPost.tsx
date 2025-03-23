import React, { useState } from 'react'
import { useGetPostsQuery, useCreatePostMutation, Post } from './store/api';
import { PostCard } from './components/PostCard';

export const ViewPost = () => {
    const { data, isLoading } = useGetPostsQuery(""); // Tookit query hook to fetch all posts
    const [createPost] = useCreatePostMutation(); // Tookit mutation hook to create a new post
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(title, body);
        const newPost: Post = {
            title,
            body,
            id: Date.now()
        }
        createPost(newPost);
        setTitle("");
        setBody("");
    }

    const containerStyle = {
        minWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
    };

    const headerStyle = {
        fontSize: '24px',
        color: '#333',
        marginBottom: '20px',
        textAlign: 'center' as const
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '10px',
        marginBottom: '20px',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px'
    };

    const inputStyle = {
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ddd',
        fontSize: '16px'
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'background-color 0.3s'
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>LEARN REDUX TOOLKIT QUERY CRUD </div>
            <form onSubmit={submitHandler} style={formStyle}>
                <input
                    type="text"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={inputStyle}
                />
                <input
                    type="text"
                    placeholder="Enter body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    style={inputStyle}
                />
                <button type='submit' style={buttonStyle}>Add Post</button>
            </form>
            {
                isLoading ?
                    <h1 style={{ textAlign: 'center', color: '#666' }}>Loading...</h1>
                    :
                    <div style={{ display: 'grid', gap: '20px' }}>
                        {
                            data?.slice().reverse().map(post => (
                                <PostCard post={post} key={post.id} />
                            ))
                        }
                    </div>
            }
        </div>
    )
}


/* 

Let me explain why data?.slice().reverse().map() works while data?.reverse().map() can cause issues:

- The key difference lies in how reverse() modifies arrays:

- reverse() is a mutating method - it modifies the original array in place
- slice() is a non-mutating method - it creates a new copy of the array
  Here's why this matters:
  
  // // This modifies the original array
  // const numbers = [1, 2, 3];
  // numbers.reverse(); // numbers is now [3, 2, 1]
  
  // // Using slice() creates a safe copy first
  // const numbers = [1, 2, 3];
  // numbers.slice().reverse(); // original array remains [1, 2, 3]


In React:

- Mutating data directly can cause issues with rendering and state management
- React relies on immutability for efficient change detection
- Modifying arrays in place can lead to unexpected behaviors and bugs
- Best practices:

- Always use non-mutating methods in React renders
- If you need to reverse an array, first create a copy using methods like:
- - slice() i.e data?.slice().reverse().map()
- - [...array] (spread operator) i.e [...(data || [])].reverse().map()
- - Array.from(array) i.e Array.from(data).reverse().map()
- - concat() i.e data?.concat().reverse().map()

Your current approach data?.slice().reverse().map() is the correct way as it:
- Safely creates a copy of the array
- Reverses the copy
- Maps over the reversed copy
- Leaves the original data untouched
*/