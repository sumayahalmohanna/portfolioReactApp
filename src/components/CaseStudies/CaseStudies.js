import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';

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

function CaseStudies() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid className={classes.grid} item container alignContent='center'>
        <Grid item xs={12} container>
          <Grid item xs={12} md={4}>
              <Grid item container justify='center'>
                <img alt="Profile."
                  className={classes.profileImg}
                  src={require("../../assets/images/placeHolder.svg" )}
                />
              </Grid>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid item xs={12} container spacing={2}>
                <Grid item xs={12}>
                  <ul>
                    <Typography variant='h2' gutterBottom>Case Studies</Typography>
                    <Typography variant='body2' gutterBottom>
                      Coming Soon!</Typography>

                  </ul>
                </Grid>
            </Grid>

          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid item container justify='center'>
            <Link to="/Contact">
            <Button size="large" variant="contained" color="primary">
               Let's talk!
             </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(CaseStudies);
