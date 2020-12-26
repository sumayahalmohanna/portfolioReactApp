import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link, withRouter } from 'react-router-dom';

const FoFPage = (props) => {
  return (
      <Grid item xs container alignContent='center' justify='center' spacing={2}>
        <p>Page not found</p>

         <Grid item xs={12}>
           <Grid container justify='center'>
             <Link to="/">
             <Button size="large" variant="contained" color="primary">
                Back to safety!
              </Button>
             </Link>
           </Grid>
         </Grid>
       </Grid>
  );
};

export default withRouter(FoFPage);
