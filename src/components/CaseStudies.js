import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import webStepOne from '../assets/images/Step-One.svg';
import webStepTwo from '../assets/images/Step-Two.png';
import webStepThree from '../assets/images/Step-Three.png';

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: '#fff',
    color: theme.palette.bgBlack.main,
    minHeight: '90vh',
    fontSize: '25px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    }
  },
  linkBtn: {
    textDecoration: 'none',
  },  
  spacer: {
    height: '40px',
  },
  whiteColumn: {
    backgroundColor: '#fff',
  },
  heroSection: {
    backgroundColor: theme.palette.bgLightBlue.main,
    position: 'relative',
  },
  heroTitle: {
    position: 'absolute',
    top: -30,
    [theme.breakpoints.down('sm')]: {
      top: -24,
    }
  },
  stepsImgs: {
    maxWidth: '750px',
    minWidth: '350px',
    width: '50vmin',
    height: 'auto',
    fontFamily: "'Merriweather', 'Roboto'",
  }
}));

function CaseStudies() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/*Main content grid container*/}
      <Grid container direction='column'>
      <div className={classes.spacer}></div>
      <div className={classes.spacer}></div>
      <div className={classes.spacer}></div>
        <Grid item container className={classes.heroSection}>
          <Grid item xs={1} sm={2} xl={3} />
          <Grid item xs={10} sm={8} xl={6}>
            <Grid item container spacing={2}>
            <Grid item md={9} sm={12}>
            <Typography gutterBottom variant="h1" className={classes.heroTitle}>
                 Protfolio Website
                </Typography>
                <div className={classes.spacer}></div>
                <Typography variant="body1">
                  Since graduating and building my first portfolio website, every few years 
                  I like to take the time to update and redesign my website. This is a chance 
                  for me to test new ideas, experiment with styles, and utilize new technologies. 
                  In this redesign my goals were:
                </Typography>
                <ul>
                  <li><Typography variant='body1'>
                    Inform users of who I am and what my skills are within 30 seconds of 
                    visiting my website.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant='body1'>
                    Learn new libraries (Material-ui, React-spring, Formik) and implement them.
                    </Typography>
                    </li>
                </ul>
                <div className={classes.spacer}></div>  
            </Grid>
            <Grid item md={3} sm={12}/>
            
            </Grid>
          </Grid>
          <Grid item xs={1} sm={2} xl={3}/>
          
        </Grid>{/**End of Portfolio Website section */}   

        <Grid item container className={classes.stepsSection}>
          <Grid item xs={1} sm={2} xl={3}/>
          <Grid item xs={10} sm={8} xl={6}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
            <Typography variant='body1' gutterBottom>I started with quick sketches, 
            once I had a rough idea for the layout I put together a color palette.</Typography>
            </Grid>
            <Grid item xs={12}>
            <img alt="Website Portfolio - Process: Step one"
                  className={classes.stepsImgs}
                  src={webStepOne}
                />
                
            <div className={classes.spacer}></div>
            </Grid>
            <Grid item xs={12}>
            <Typography variant='body1' gutterBottom>Next, I selected the fonts I would use and refined 
            the color palette.</Typography>
            </Grid>
            <Grid item xs={12}>
            <img alt="Website Portfolio - Process: Step two"
                  className={classes.stepsImgs}
                  src={webStepTwo}
                />
                <div className={classes.spacer}></div>
            </Grid>
            
            <Grid item xs={12}>
            <Typography variant='body1' gutterBottom>With the layout, fonts, and color palette done I then 
            made a high-fidelity mockup. I use it as a guide when I am building the actual components.</Typography>
            </Grid>
            <Grid item xs={6}>
            <img alt="Website Portfolio - Process: Step three"
                  className={classes.stepsImgs}
                  src={webStepThree}
                />
                <div className={classes.spacer}></div>
            </Grid>
            
            </Grid>
          </Grid>
          <Grid item xs={1} sm={2} xl={3}/>
        </Grid>

        <div className={classes.spacer}></div>
        <Grid item container>
          <Grid item xs={1} sm={2} xl={3}/>
          <Grid item xs={10} sm={8} xl={6}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
            <Grid container direction='column' alignItems='center'>
            <Grid item xs>
            <Typography variant="body1">
              Have questions? I'd love to hear from you.               
            </Typography>
            </Grid>
            <Grid item xs>
            <Link to='/home/contact' className={classes.linkBtn}>
                      <Button size="large" variant="contained" color="primary">
                        Let's Talk!
                      </Button>
                    </Link>
            </Grid>
            </Grid>
            </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} sm={2} xl={3}/>
        </Grid>{/**End of Contact button section */}

      </Grid>{/*End of main container*/}
      
      <div className={classes.spacer}></div>
    </div>
  );
};

export default CaseStudies;
