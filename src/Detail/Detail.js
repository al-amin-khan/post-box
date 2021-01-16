import { Card, CardActionArea, CardContent, Container, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const Detail = () => {
  const {postId} = useParams();
  const [detailPost, setDetailPost] = useState({});
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState({})
  const {title, body} = detailPost;

  
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setDetailPost(data))
    .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
    fetch(url)
    .then(res => res.json())
    .then(data => setComments(data))
    .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    const url = 'https://randomuser.me/api/?results=5';
    fetch(url)
    .then(res => res.json())
    .then(data => setUsers(data.results))
    .catch(err => console.log(err))
  }, []);

            

  console.log(users.results);

  return (
    <Container>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {body}
            </Typography>
          </CardContent>
          <CardContent>
            {
              comments.map(comment => <Comments comment={comment}></Comments>)
            }

          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default Detail;