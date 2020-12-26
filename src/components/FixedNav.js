import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: '#ccc',
    position: 'absolute',
    top: '0',
    right: '0',
    zIndex: '3', 
  },
  grid: {
    margin: '0',
    paddingTop: theme.spacing(2),
  },
}));

function FixedNav() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container justify="space-evenly">
          <Grid item xs>
            <Link to="/"><Button size="small" variant="contained" color="primary">
               <Typography>About</Typography>
             </Button></Link>
          </Grid>
          <Grid item xs>
            <Link to="/Skills"><Button size="small" variant="contained" color="primary">
               <Typography>Skills & Tools</Typography>
             </Button></Link>
          </Grid>
          <Grid item xs>
            <Link to="/CaseStudies"><Button size="small" variant="contained" color="primary">
               <Typography>Case Studies</Typography>
             </Button></Link>
          </Grid>
          <Grid item xs>
            <Link to="/Contact"><Button size="small" variant="contained" color="primary">
               <Typography>Contact</Typography>
             </Button></Link>
          </Grid>

      </Grid>
    </div>
  );
};

export default FixedNav;