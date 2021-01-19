import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: '#fff',
    color: theme.palette.bgBlack.main,
    minHeight: '90vh',
    fontSize: '25px',
  },
  linkBtn: {
    textDecoration: 'none',
  },  
  spacer: {
    height: '80px',
  },
  whiteColumn: {
    backgroundColor: '#fff',
  },
  heroSection: {
  },
  heroTitle: {

  },
}));

function FoFPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <div className={classes.spacer}></div>
    {/*Main content grid container*/}
    <Grid container direction='column'>
      <Grid item container className={classes.heroSection}>
        <Grid item xs={1} sm={2} xl={3} className={classes.whiteColumn}/>
        <Grid item xs={10} sm={8} xl={6}>
          <Grid item container spacing={2}>
          <Grid item md={9} sm={12}>
          <Typography gutterBottom variant="h1" className={classes.heroTitle}>
               Page not found
              </Typography>
              <Grid item xs>
          <Link to='/' className={classes.linkBtn}>
                    <Button size="large" variant="contained" color="primary">
                      Back to Safety
                    </Button>
                  </Link>
          </Grid>
          </Grid>
          <Grid item md={3} sm={12}/>
          
          </Grid>
        </Grid>
        <Grid item xs={1} sm={2} xl={3}/>
        
      </Grid>{/**End of Portfolio Website section */}   
    </Grid>{/*End of main container*/}
    
    <div className={classes.spacer}></div>
  </div>
  );
};

export default FoFPage;
