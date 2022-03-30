import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from '@material-ui/core/LinearProgress';
import { useFormik } from "formik";
import * as Yup from "yup";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.light,
    color: "#fff",
    minHeight: "90vh",
    fontSize: "25px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  linkBtn: {
    textDecoration: "none",
  },
  spacer: {
    height: "80px",
  },
  whiteColumn: {
    backgroundColor: "#fff",
  },
  heroSection: {
    position: "relative",
  },
  heroTitle: {
    position: "absolute",
    top: -30,
    [theme.breakpoints.down("sm")]: {
      top: -24,
    },
  },
  formTextField: {
    color: '#fff',
    backgroundColor: 'yellow',
  }
}));

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Must be at least 3 characters.")
    .max(25, "Must be 25 characters or less.")
    .required("Required"),
  email: Yup.string().email("Invalid email.").required("Required"),
  message: Yup.string()
    .min(3, "Must be at least 3 characters.")
    .max(250, "Must be 250 characters or less.")
    .required("Required"),
});

function Contact() {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        //create new xmlhttprequest
        var xhr = new XMLHttpRequest();
        //get a callback when the server responds
        xhr.addEventListener("load", () => {
          //update email status with response
         // console.log('xhr response: ' + xhr.responseText);
        });

        xhr.open(
          "GET",
          "http://www.sumayahdesigns.com/sendemail/index.php?sendto=" +
            values.email +
            "&name=" +
            values.name +
            "&message=" +
            values.message, true
        );
        //console.log('Values: ' + values.email + ' ' + values.name + ' ' + values.message);
        xhr.send();
        formik.resetForm();
    },
  });
  return (
    <div className={classes.root}>
      <div className={classes.spacer}></div>
      {/*Main content grid container*/}
      <Grid container direction="column">
        <Grid item container className={classes.heroSection}>
          <Grid item xs={1} sm={2} xl={3} />
          <Grid item xs={10} sm={8} xl={6}>
            <Grid item container spacing={2}>
              <Grid item md={9} sm={12}>
                <Typography
                  gutterBottom
                  variant="h1"
                  className={classes.heroTitle}
                >
                  Let's Talk!
                </Typography>
              </Grid>
              <Grid item md={3} sm={12} />
            </Grid>
          </Grid>
          <Grid item xs={1} sm={2} xl={3} />
        </Grid>
        {/**End of Portfolio Website section */}

        <div className={classes.spacer}></div>
        <Grid item container>
          <Grid item xs={1} sm={2} xl={3} />
          <Grid item xs={10} sm={8} xl={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid container direction="column">
                  <Grid item xs>
                    <Grid item container spacing={3}>
                      <LinearProgress />
                      <form
                        onSubmit={formik.handleSubmit}
                        className={classes.form}
                      >
                        <Grid item xs={12}>
                          <TextField
                            inputProps={{style: {color: '#fff'},}}
                            name="name"
                            id="name"
                            label="Full Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.name && Boolean(formik.errors.name)
                            }
                            helperText={
                              formik.touched.name && formik.errors.name
                            }
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            inputProps={{style: {color: '#fff'},}}
                            name="email"
                            type="email"
                            label="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.email &&
                              Boolean(formik.errors.email)
                            }
                            helperText={
                              formik.touched.email && formik.errors.email
                            }
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            inputProps={{style: {color: '#fff'},}}
                            name="message"
                            id="message"
                            multiline
                            rows={4}
                            label="Message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            error={
                              formik.touched.message &&
                              Boolean(formik.errors.message)
                            }
                            helperText={
                              formik.touched.message && formik.errors.message
                            }
                          />
                        </Grid>
                        <br />

                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            size="large"
                            variant="contained"
                            color="primary"
                          >
                            Submit
                          </Button>
                        </Grid>
                      </form>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} sm={2} xl={3} />
        </Grid>
        {/**End of Contact button section */}
      </Grid>
      {/*End of main container*/}
    </div>
  );
}

export default Contact;
