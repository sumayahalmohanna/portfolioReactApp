import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const FoFPage = (props) => {
  return (
      <Grid item xs container alignContent='center' justify='center' spacing={2}>
        <p>Page not found</p>

         <Grid item xs={12}>
           <Grid container justify='center'>
             <Button size="large" href="/home/about" variant="contained" color="primary">
                Back to safety
              </Button>
           </Grid>
         </Grid>
       </Grid>
  );
};

export default FoFPage;
