import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typewriter from 'typewriter-effect';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import ProfilePicture from '../assets/images/profilePic.svg';
import WebdevIcon from '../assets/images/webdevIcon.svg';
import DesignIcon from '../assets/images/designIcon.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fff',
    color: '#fff',
    minHeight: '90vh',
    fontSize: 'calc(10px + 2vmin)',
  },
  profileImg: {
    maxHeight: '450px',
    height: 'auto',
    width: 'auto',
    pointerEvents: 'none',
    [theme.breakpoints.down('sm')]: {
      height: '220px',
    }
  },
  paper: {
    color: theme.palette.secondary.main,
  },
  paperTitle: {
    color: theme.palette.primary.main,
  },
  subUL: {
    listStyleType: 'none',
  },
  spacer: {
    height: '80px',
  },
  blueSpacer: {
    height: '80px',
    backgroundColor: theme.palette.secondary.main,
  },
  heroSection: {
    backgroundColor: theme.palette.secondary.main,
  },
  skillsSection: {
    backgroundColor: '#fff',
  },
  customWebdevIcon: {
    width: '85px',
    height: 'auto',
  },
  customDesignIcon: {
    width: '53px',
    height: 'auto',
  }
}));

function About() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.blueSpacer}></div>
      {/*Main content grid container*/}
      <Grid container direction='column'>
        <Grid item container className={classes.heroSection}>
          <Grid item xs={1} sm={2} xl={3}/>
          <Grid item xs={10} sm={8} xl={6}>
            <Grid item container spacing={2}>
            <Grid item md={4} sm={12}>
            <img alt="Profile of Sam."
                  className={classes.profileImg}
                  src={ProfilePicture}
                />
            </Grid>
            <Grid item md={8} sm={12}>
            <Typography gutterBottom variant="h1">
                  <Typewriter
                    options={{
                      strings: ["Hi, I'm Sam.", "I'm a Developer.", "I Love Design."],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Typography>
                <Typography className={classes.textBody} variant="body1">I am a Front-end Developer and Designer with 6 years experience.
                I am passionate about building
                websites that are fast, responsive, and focused on the users experience
                    </Typography>
                    <Typography className={classes.textBody} variant="body2">Click here to learn about my process.
                    
                  <Link to='/home/caseStudies'>
                    <Button size="large" variant="contained" color="primary">
                      Case Studies
                    </Button>
                  </Link></Typography>
            </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} sm={2} xl={3}/>
        </Grid>
        {/*end of first column item*/}

        <div className={classes.blueSpacer}></div>
        <div className={classes.blueSpacer}></div>

        <Grid item container className={classes.skillsSection}>
        <Grid item xs={1} sm={2} xl={3}/>
          <Grid item xs={10} sm={8} xl={6}>
          <Paper className={classes.paper}>
            <ul>
          <img alt="Web dev graphic of a computer by Sam."
                  className={classes.customWebdevIcon}
                  src={WebdevIcon}
                />
                    <Typography variant='h3' gutterBottom className={classes.paperTitle}>Front-end Developer</Typography>
                    <Typography variant='body2' gutterBottom>
                      I am comfortable building from scratch as well as using frameworks
                    and libraries when needed.</Typography>
                    <Typography variant='h4' gutterBottom>Languages and Frameworks:</Typography>
                      <ul className={classes.subUL}>
                        <Grid item container>
                          <Grid item xs={6}>
                            <li><Typography variant='body2'>HTML5</Typography></li>
                            <li><Typography variant='body2'>Javascript</Typography></li>
                            <li><Typography variant='body2'>CSS3</Typography></li>
                            <li><Typography variant='body2'>Bootstrap</Typography></li>
                          </Grid>
                          <Grid item xs={6}>
                            <li><Typography variant='body2'>React.js</Typography></li>
                            <li><Typography variant='body2'>Material-UI</Typography></li>
                            <li><Typography variant='body2'>Formik</Typography></li>
                          </Grid>
                        </Grid>
                      </ul>
                    <Typography variant='h4' gutterBottom>Development Tools:</Typography>
                      <ul  className={classes.subUL}>
                        <Grid item container>
                          <Grid item xs={6}>
                            <li><Typography variant='body2'>Atom</Typography></li>
                            <li><Typography variant='body2'>Terminal</Typography></li>
                            <li><Typography variant='body2'>VSCode</Typography></li>
                          </Grid>
                          <Grid item xs={6}>
                            <li><Typography variant='body2'>Chrome Dev Tools</Typography></li>
                            <li><Typography variant='body2'>Google</Typography></li>
                          </Grid>
                        </Grid>
                      </ul>
                  </ul>
            {/*End of web dev section of skills */}
          
            <ul>
            <img alt="Design graphic of a lightbulb by Sam."
                  className={classes.customDesignIcon}
                  src={DesignIcon}
                />
                    <Typography variant='h2' gutterBottom className={classes.paperTitle}>Graphic Designer</Typography>
                    <Typography variant='body2' gutterBottom>
                      I lean towards human centered design and know the impact good user
                    experience has on any product.</Typography>
                    <Typography variant='h4' gutterBottom>Areas of Interest:</Typography>
                    <ul className={classes.subUL}>
                      <Grid item container>
                        <Grid item xs={6}>
                          <li><Typography variant='body2'>Web Design</Typography></li>
                          <li><Typography variant='body2'>UX Design</Typography></li>
                        </Grid>
                        <Grid item xs={6}>
                          <li><Typography variant='body2'>App Design</Typography></li>
                          <li><Typography variant='body2'>Mobile first Design</Typography></li>
                          </Grid>
                      </Grid>
                    </ul>
                    <Typography variant='h4' gutterBottom>Design Tools:</Typography>
                      <ul className={classes.subUL}>
                        <li><Typography variant='body2'>Affinity Designer (Illustrator)</Typography></li>
                        <li><Typography variant='body2'>Affinity Photo (Photo Editing)</Typography></li>
                        <li><Typography variant='body2'>Affinity Publisher (Layout Design)</Typography></li>
                        <li><Typography variant='body2'>Pen & Paper</Typography></li>
                      </ul>
                  </ul>
                  </Paper>
          </Grid>{/*End of skills section content item */}
          <Grid item xs={1} sm={2} xl={3}/>
        </Grid>
        
      </Grid>{/*End of main container*/}
      
      <div className={classes.spacer}></div>
    </div>
  );
};

export default About;