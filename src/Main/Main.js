import { Button } from '@material-ui/core';
import React, { createContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import Post from '../Post/Post';
import Grid from '@material-ui/core/Grid';

export const PostContext = createContext();

const Main = () => {
  const [posts, setPosts] = useState([]);
  const postContextValue = posts;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
    .catch(error => console.log(error))
  }, [])
  return (
    <PostContext.Provider value={postContextValue}>
      <Header></Header>
      <Grid container spacing={3}>
      {
        posts.map(post => <Post post={post} key={post.id}></Post>)
      }
      </Grid>
      
    </PostContext.Provider>
  );
};

export default Main;