import React, { useEffect, useState } from 'react';
import { API_URL } from '../Constants';

function MainScreen() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/posts`)
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Main Page</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p><em>{post.username}</em></p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainScreen;
