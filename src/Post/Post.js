import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box, Grid, Paper } from '@material-ui/core';
import { PostContext } from '../Main/Main';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  border: {
    border: '1px solid #00b0ff'
  },
});

const Post = (props) => {
  // const post = useContext(PostContext);
  const {title, body} = props.post;

  const classes = useStyles();
  // className={classes.root}

  return (
    <Grid item md={4}>
      <Card style={{ height: '100%'}} className={classes.border}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {body.split(" ").splice(0,15).join(" ")} <Link underline='hover'>read more...</Link>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>

    
  );
};

export default Post;