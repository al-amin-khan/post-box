import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';
import { useParams } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    marginBottom: '10px',
    // maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '50%',
  },
  bottomPadding: {
    paddingTop: '5px',
  },
  marginTop: {
    marginTop: '-10px'
  },
}));


const Comments = (props) => {
  const classes = useStyles();
  const {postId, id, name, email, body} = props.comment;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="https://cdn.pixabay.com/photo/2020/12/21/19/05/window-5850628_960_720.png" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column">
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                User: {email}
                </Typography>
                <Typography variant="body2" color="textSecondary" className={classes.marginTop}>
                  Name: {name}
                </Typography>
                <Typography variant="body2" gutterBottom className={classes.bottomPadding}>
                  {body}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>    
  );
};

export default Comments;