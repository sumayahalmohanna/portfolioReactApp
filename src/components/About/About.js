import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Typewriter from 'typewriter-effect';
import { makeStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';

import ProfilePicture from '../../assets/images/profilePic.svg';
import BackgroundImage from '../../assets/images/touchOfBlueHills.svg';

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: theme.palette.bgWhite.main,
    minHeight: '100vh',
    display: 'flex',
    fontSize: 'calc(10px + 2vmin)',

  },
  profileImg: {
    height: '50vmin',
    maxHeight: '450px',
    width: 'auto',
    pointerEvents: 'none',
  },
  bgImg: {
    position: 'absolute',
    bottom: '0',
    right: '0',
    height: '95vmin',
    minHeight: '65vh',
    width: 'auto',
    zIndex: '0',
  },
  content: {
    zIndex: '1',
    padding: theme.spacing(2),
  },
  textBody: {
    maxWidth: '900px',
  },
  spacer: {
    height: '6vh',
  },
}));

export default function About(){
  const classes = useStyles();
  return(
    <div className={classes.root}>
        <Grid className={classes.content} container alignContent='center'>
          <Grid item xs={12} md={4}>
              <Grid container justify='center'>
                <img alt="Profile of Sam."
                  className={classes.profileImg}
                  src={ProfilePicture}
                />
              </Grid>
              <Grid item container className={classes.spacer}></Grid>
          </Grid>
          <Grid item xs={12} md={8} container spacing={2}>
            <Grid item xs container direction='column' spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h1">
                    <Typewriter
                      options={{
                        strings: [ "Hi, I'm Sam.", "I'm a Developer.","I Love Design."],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Typography>
                  <Typography className={classes.textBody} variant="body1">I am a Front-end Developer and Designer with 6 years experience.
                    As a graduate of Computer Science I am capable of learning new frameworks,
                     languages, and libraries to get the job done. I am passionate about building
                     websites that are fast, responsive, and focused on the users experience
                  </Typography>
                  <Typography className={classes.textBody} variant="body2">This website is still in development.
                    It will break on page reload and navigating using URL's. This is a simple demo for now.
                  </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid item container className={classes.spacer}></Grid>
              <Grid container justify='center'>
                <Link to="/Skills"><Button size="large" variant="contained" color="primary">
                   Skills & Tools
                 </Button></Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <img alt="Background art."
          className={classes.bgImg}
          src={BackgroundImage}
        />
    </div>
  )
}
