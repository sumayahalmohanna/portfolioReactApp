import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: theme.palette.bgLightBlue.main,
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
  form: {
    color: theme.palette.bgWhite.main,
  },
  grid: {
    maxWidht: '100%',
    margin: '0',
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
}));

function MyTextField(props){
  return(
    <TextField
       id="standard-multiline-static"
       multiline
       rows={4}
       label= 'Message'
     />
  );
};

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid className={classes.grid} item container alignContent='center'>
        <Grid item xs={12} container>
          <Grid item xs={12}>
              <Grid item container justify='center'>
                <Typography variant='h1'>Let's Talk!</Typography>
              </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12} container direction='column' justify='center' spacing={2}>
                <Grid item xs={12}>
                  <div>
                     <Formik
                       initialValues={{ name: '', email: '', message: '' }}
                       validationSchema={Yup.object({
                         name: Yup.string()
                          .min(3, 'Must be at least 3 characters.')
                          .max(25, 'Must be 25 characters or less.')
                          .required('Required'),
                         email: Yup.string()
                          .email('Invalid email.')
                          .required('Required'),
                         message: Yup.string()
                         .min(3, 'Must be at least 3 characters.')
                         .max(250, 'Must be 250 characters or less.')
                         .required('Required'),
                       })}
                       onSubmit={(values, { setSubmitting }) => {
                         setTimeout(() => {
                           alert(JSON.stringify(values, null, 2));
                           setSubmitting(false);
                         }, 400);
                       }}
                     >
                       {({ isSubmitting }) => (
                         <Grid item container justify='center'>
                           <Form className={classes.form}>
                             <Grid item xs={12}>
                               <Field
                                  component={TextField}
                                  name="name"
                                  type="name"
                                  label="Full Name"
                                  helperText="Enter your full name"
                                />
                             </Grid>
                             <Grid item xs={12}>
                               <Field
                                  component={TextField}
                                  name="email"
                                  type="email"
                                  label="Email"
                                  helperText="Please enter your email"
                                />
                             </Grid>
                             <Grid item xs={12}>
                               <Field
                                  component={MyTextField}
                                  name="message"
                                  type="message"
                                  label="Message"
                                  helperText="Write your message here.."
                                />

                             </Grid>

                             <Grid item xs={12}>
                               <Button type='submit' disabled size="large" href="/home/contact" variant="contained" color="primary">
                                  Not setup yet
                                </Button>
                             </Grid>
                           </Form>
                         </Grid>
                       )}
                     </Formik>
                   </div>
                </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
};

export default Contact;
