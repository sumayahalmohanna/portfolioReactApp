import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Transition } from "react-spring/renderprops";
import Hidden from "@material-ui/core/Hidden";
import webStepOne from "../assets/images/Step-One.svg";
import webStepTwo from "../assets/images/Step-Two.png";
import webStepThree from "../assets/images/Step-Three.png";
import webStepFour from "../assets/images/Step-Four.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    color: theme.palette.bgBlack.main,
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
    height: "40px",
  },
  whiteColumn: {
    backgroundColor: "#fff",
  },
  heroSection: {
    backgroundColor: theme.palette.bgLightBlue.main,
    position: "relative",
  },
  heroTitle: {
    position: "absolute",
    top: -30,
    [theme.breakpoints.down("sm")]: {
      top: -24,
    },
  },
  stepsImgs: {
    maxWidth: "750px",
    width: "100%",
    height: "auto",
    fontFamily: "'Merriweather', 'Roboto'",
    paddingTop: theme.spacing(2),
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
  },
  myCard: {
    backgroundColor: "#fff",
    padding: theme.spacing(2),
    marginTop: "10px",
    borderRadius: 10,
    width: "auto",
  },
}));

function CaseStudies() {
  const classes = useStyles();
  const show = true;
  let delayTime = 300;
  const steps = [
    {
      note:
        "1. I started with quick sketches, once I had a rough idea for the layout I put together a color palette.",
      img: webStepOne,
      alt: "Website Portfolio - Process: Step one",
    },
    {
      note:
        "2. I selected a serif font for bold main headings and a san-serif for body text readability and refined the color palette.",
      img: webStepTwo,
      alt: "Website Portfolio - Process: Step two",
    },
    {
      note:
        "3. With the layout, fonts, and color palette done I then made a high-fidelity mockup. I use it as a guide when I am building the actual components.",
      img: webStepThree,
      alt: "Website Portfolio - Process: Step three",
    },
    {
      note:
        "4. Lastly, I open Visual Studio and start building. I like to use Github for version control as well as hosting the development version of the website so that it can be tested on multiple devices.",
      img: webStepFour,
      alt: "Website Portfolio - Process: Step four",
    },
  ];

  return (
    <div className={classes.root}>
      {/*Main content grid container*/}
      <Grid container direction="column">
        <div className={classes.spacer}></div>
        <div className={classes.spacer}></div>
        <div className={classes.spacer}></div>
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
                  Protfolio Website
                </Typography>
                <div className={classes.spacer}></div>
                <Typography variant="body1">
                  Since graduating and building my first portfolio website,
                  every few years I like to take the time to update and redesign
                  my website. This is a chance for me to test new ideas,
                  experiment with styles, and utilize new technologies. In this
                  redesign my goals were:
                </Typography>
                <ul>
                  <li>
                    <Typography variant="body1">
                      Inform users of who I am and what my skills are within the
                      first few moments of visiting my website.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1">
                      Learn new libraries (Material-ui, React-spring, Formik)
                      and implement them.
                    </Typography>
                  </li>
                </ul>
                <div className={classes.spacer}></div>
              </Grid>
              <Grid item md={3} sm={12} />
            </Grid>
          </Grid>
          <Grid item xs={1} sm={2} xl={3} />

          <Grid item container className={classes.stepsSection}>
            <Grid item xs={1} />
            <Grid item xs={10}>
              <Grid item container spacing={2}>
                {steps.map((step) => {
                  const { note, img, alt } = step;
                  return (
                    <Grid key={step.alt} item xs={12} md={6}>
                      <Transition
                        items={show}
                        from={{
                          opacity: 0,
                          marginLeft: -100,
                          marginRight: 100,
                        }}
                        enter={{ opacity: 1, marginLeft: 0, marginRight: 0 }}
                        delay={delayTime}
                      >
                        {(show) =>
                          show &&
                          ((props) => (
                            <div style={props}>
                              <div className={classes.myCard}>
                                <Grid item xs={10}>
                                  <div className={classes.spacer}></div>
                                  <Typography variant="body2" gutterBottom>
                                    {note}
                                  </Typography>
                                </Grid>
                                <Grid item>
                                  <img
                                    alt={alt}
                                    className={classes.stepsImgs}
                                    src={img}
                                  />
                                  <div className={classes.spacer}></div>
                                </Grid>
                              </div>
                            </div>
                          ))
                        }
                      </Transition>
                      <Hidden xsUp>{(delayTime += 400)}</Hidden>
                    </Grid>
                  );
                })}
              </Grid>
              <div className={classes.spacer}></div>
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </Grid>
        {/**End of Portfolio Website section */}

        <div className={classes.spacer}></div>
        <Grid item container>
          <Grid item xs={1} sm={2} xl={3} />
          <Grid item xs={10} sm={8} xl={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Grid container direction="column" alignItems="center">
                  <Grid item xs>
                    <Typography variant="body1">
                      Have questions? I'd love to hear from you.
                    </Typography>
                  </Grid>
                  <Grid item xs>
                    <Link to="/home/contact" className={classes.linkBtn}>
                      <Button size="large" variant="contained" color="primary">
                        Let's Talk!
                      </Button>
                    </Link>
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
      <div className={classes.spacer}></div>
    </div>
  );
}

export default CaseStudies;
