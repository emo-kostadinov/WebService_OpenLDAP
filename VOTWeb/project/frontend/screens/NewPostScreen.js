import React, { useState } from 'react';
import { API_URL } from '../Constants';

function NewPostScreen() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API_URL}/posts/new`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content, username })
    });
    if (response.status === 200) {
      alert('Post created successfully');
      setTitle('');
      setContent('');
      setUsername('');
    } else {
      alert('Failed to create post');
    }
  };

  return (
    <div>
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}

export default NewPostScreen;
