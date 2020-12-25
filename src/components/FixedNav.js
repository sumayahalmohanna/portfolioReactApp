import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: theme.palette.bgWhite.main,
    minHeight: '100vh',
    display: 'flex',
    fontSize: 'calc(14px + 2vmin)',
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
    paddingTop: theme.spacing(8),
  },
}));

function FixedNav(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid className={classes.grid} item container alignContent='center'>
        <Grid item xs={12}>
          <Grid item>
            <Link to="/about"><Button size="large" variant="contained" color="primary">
               About
             </Button></Link>
          </Grid>
          <Grid item>
            <Link to="/skills"><Button size="large" variant="contained" color="primary">
               Skills & Tools
             </Button></Link>
          </Grid>
          <Grid item>
            <Link to="/caseStudies"><Button size="large" variant="contained" color="primary">
               Case Studies
             </Button></Link>
          </Grid>
          <Grid item>
            <Link to="/contact"><Button size="large" variant="contained" color="primary">
               Contact
             </Button></Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default FixedNav;