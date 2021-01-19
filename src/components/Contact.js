import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
    height: '80px',
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
    },
  },
}));

function MyTextField(props){
  return(
    <TextField
       id="standard-multiline-static"
       multiline
       rows={4}
       label= 'Your Message'
     />
  );
};

function Contact() {
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
                 Let's Talk!
                </Typography>
                <div className={classes.spacer}></div>
                
            </Grid>
            <Grid item md={3} sm={12}/>
            
            </Grid>
          </Grid>
          <Grid item xs={1} sm={2} xl={3}/>
          
        </Grid>{/**End of Portfolio Website section */}   

        <div className={classes.spacer}></div>
        <Grid item container>
          <Grid item xs={1} sm={2} xl={3}/>
          <Grid item xs={10} sm={8} xl={6}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
            <Grid container direction='column'>
            <Grid item xs>
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
                           alert(JSON.stringify(values, null, 2));
                         }, 500);
                       }}
                     >
                       {({ submitForm, isSubmitting }) => (
                         <Grid item container>
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
                             {isSubmitting && <LinearProgress />}
          <br />

                             <Grid item xs={12}>
                               <Button disabled={isSubmitting} onClick={submitForm} size="large" variant="contained" color="primary">
                                  Submit
                                </Button>
                             </Grid>
                           </Form>
                         </Grid>
                       )}
                     </Formik>
            </Grid>
            </Grid>
            </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} sm={2} xl={3}/>
        </Grid>{/**End of Contact button section */}

      </Grid>{/*End of main container*/}
    </div>
  );
};

export default Contact;


{/**<div className={classes.root}>
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
                         }, 500);
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
    </div> */}