import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';

//import bgImg from "../../assets/images/blob4.svg";

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: theme.palette.bgLightBlue.main,
    minHeight: '100vh',
    display: 'flex',
    fontSize: 'calc(12px + 2vmin)',
  },
  profileImg: {
    height: '50vmin',
    maxHeight: '450px',
    width: 'auto',
    pointerEvents: 'none',
  },
  grid: {
    maxWidht: '100%',
    margin: '0',
    color: theme.palette.bgBlack.main,
    zIndex: '1',
  },
  bgImg: {
    position: 'absolute',
    top: '0',
    right: '0',
    height: '95vmin',
    minHeight: '65vh',
    width: 'auto',
    zIndex: '0',
    [theme.breakpoints.up('xl')]: {
      width: '100vw',
      height: 'auto',
    },
  },
  spacer: {
    height: '10vh',
  },
  listWidth: {
    maxWidth: '600px',
    //backgroundImage: 'url('+ bgImg+ ')',
  },
}));

function Skills(props) {
const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid className={classes.grid} item container alignContent='center'>

        <Grid item container className={classes.spacer}></Grid>

        <Grid item xs={12} container direction='row-reverse'>

          <Grid item xs={12} md={6}>
              <Grid item container justify='center'>
                <img alt="Profile."
                  className={classes.profileImg}
                  src={require("../../assets/images/placeHolder.svg" )}
                />
              </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid item xs={12} container spacing={2}>
                <Grid item xs={12}>
                  <ul className={classes.listWidth}>
                    <Typography variant='h2' gutterBottom>Front-end Developer</Typography>
                    <Typography variant='body2' gutterBottom>
                      I am comfortable building from scratch as well as using frameworks
                    and libraries when needed.</Typography>
                    <Typography variant='h4' gutterBottom>Languages and Frameworks:</Typography>
                      <ul>
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
                      <ul>
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
                </Grid>
            </Grid>

          </Grid>

        </Grid>

        <Grid item container className={classes.spacer}></Grid>

        <Grid item xs={12} container>

          <Grid item xs={12} md={6}>
              <Grid item container justify='center'>
                <img alt="Profile."
                  className={classes.profileImg}
                  src={require("../../assets/images/placeHolder.svg" )}
                />
              </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid item xs={12} container spacing={2}>
                <Grid item xs={12}>
                  <ul className={classes.listWidth}>
                    <Typography variant='h2' gutterBottom>Graphic Designer</Typography>
                    <Typography variant='body2' gutterBottom>
                      I lean towards human centered design and know the impact good user
                    experience has on any product.</Typography>
                    <Typography variant='h4' gutterBottom>Areas of Interest:</Typography>
                    <ul>
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
                      <ul>
                        <li><Typography variant='body2'>Affinity Designer (Illustrator)</Typography></li>
                        <li><Typography variant='body2'>Affinity Photo (Photo Editing)</Typography></li>
                        <li><Typography variant='body2'>Affinity Publisher (Layout Design)</Typography></li>
                        <li><Typography variant='body2'>Pen & Paper</Typography></li>
                      </ul>
                  </ul>
                </Grid>
            </Grid>
          </Grid>

        </Grid>
        <Grid item xs={12}>
          <Grid item container justify='center'>
            <Link to="/CaseStudies">
            <Button size="large" variant="contained" color="primary">
               My process
             </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid item container className={classes.spacer}></Grid>
      </Grid>
      <img alt="Background Graphic."
        className={classes.bgImg}
        src={require("../../assets/images/touchOfBlueHills2.svg" )}
      />
    </div>
  );
};

export default withRouter(Skills);
