import { Card, CardActionArea, CardContent, Container, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const {postId} = useParams();
  const [detailPost, setDetailPost] = useState({});
  const {title, body} = detailPost;
  
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setDetailPost(data))
    .catch(err => console.log(err))
  }, []);

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
        </CardActionArea>
      </Card>
    </Container>
  );
};

export default Detail;