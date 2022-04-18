import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typewriter from "typewriter-effect";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ProfilePicture from "../assets/images/profilePic.svg";
import WebdevIcon from "../assets/images/webdevIcon.svg";
import DesignIcon from "../assets/images/designIcon.svg";
import { Spring, config, Transition } from "react-spring/renderprops";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      "linear-gradient(to bottom, rgba(44,110,174,1), rgba(44,110,174,1), rgba(255,255,255,1))",
    color: "#fff",
    minHeight: "90vh",
    fontSize: "25px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  profileImg: {
    maxHeight: "450px",
    height: "auto",
    width: "auto",
    pointerEvents: "none",
    [theme.breakpoints.down("sm")]: {
      height: "220px",
    },
  },
  paper: {
    color: theme.palette.secondary.main,
    padding: theme.spacing(3),
    borderRadius: 10,
  },
  paperTitle: {
    color: theme.palette.primary.main,
  },
  skillsContainer: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  },
  subUL: {
    listStyleType: "none",
    paddingBottom: "12px",
    lineHeight: "1.5",
  },
  whiteSpacer: {
    backgroundColor: "#fff",
    height: "80px",
  },
  blueSpacer: {
    height: "80px",
    backgroundColor: theme.palette.secondary.main,
  },
  whiteColumn: {
    backgroundColor: "#fff",
  },
  heroSection: {
    backgroundColor: theme.palette.secondary.main,
  },
  skillsSection: {},
  customWebdevIcon: {
    maxWidth: "85px",
    height: "auto",
  },
  customDesignIcon: {
    maxWidth: "53px",
    height: "auto",
  },
  linkBtn: {
    textDecoration: "none",
    marginLeft: theme.spacing(2),
  },
}));

function About() {
  const classes = useStyles();
  const show = true;
  return (
    <div className={classes.root}>
      <div className={classes.blueSpacer}></div>
      {/*Main content grid container*/}
      <Grid container direction="column">
        <Grid item container className={classes.heroSection}>
          <Grid item xs={1} sm={2} xl={3} />
          <Grid item xs={10} sm={8} xl={6}>
            <Grid item container spacing={2}>
              <Grid item md={3} sm={12}>
                <Spring
                  config={config.wobbly}
                  from={{ opacity: 0, marginTop: -400 }}
                  to={{ opacity: 1, marginTop: 0 }}
                  delay={500}
                >
                  {(props) => (
                    <img
                      alt="Profile of Sam."
                      style={props}
                      className={classes.profileImg}
                      src={ProfilePicture}
                    />
                  )}
                </Spring>
              </Grid>
              <Grid item md={9} sm={12}>
                <Typography gutterBottom variant="h1">
                  <Typewriter
                    options={{
                      strings: [
                        "Hi, I'm Sam.",
                        "I'm a Developer.",
                        "I Love Design.",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </Typography>
                <Typography variant="body1">
                  I am a Front-end Developer and Designer with 7 years
                  experience building websites that are fast, responsive, and
                  focused on UX. My programming background is complemented by my
                  eye for design, enabling me to see a project through every
                  stage of production. My problem solving skills make me an
                  asset to any team and I enjoy taking on new challenges.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={1} sm={2} xl={3} />

          <Grid item container>
            <Grid item xs={1} sm={2} xl={3} />
            <Grid item xs={10} sm={8} xl={6}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <div className={classes.blueSpacer}></div>
                  <Grid container direction="column" alignItems="center">
                    <Grid item xs>
                      <Typography variant="body1">
                        Click here to learn about my process.
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Link to="/portfolioReactApp/home/caseStudies" className={classes.linkBtn}>
                        <Button
                          size="large"
                          variant="contained"
                          color="primary"
                        >
                          Case Studies
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
        {/*end of first column item*/}

        <div className={classes.blueSpacer}></div>

        <Grid item container className={classes.skillsSection}>
          <Grid item xs={1} sm={2} xl={3} className={classes.whiteColumn}>
            <Transition
              items={show}
              from={{ opacity: 0 }}
              enter={{ opacity: 1 }}
              delay={400}
            >
              {(show) =>
                show &&
                ((props) => (
                  <div style={props}>
                    <div className={classes.blueSpacer}></div>
                  </div>
                ))
              }
            </Transition>
          </Grid>
          <Grid item xs={10} sm={8} xl={6}>
            <Paper className={classes.paper} elevation={3}>
              <Transition
                items={show}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                delay={600}
              >
                {(show) =>
                  show &&
                  ((props) => (
                    <div style={props}>
                      <Grid container>
                        <Grid
                          item
                          md={6}
                          xs={12}
                          className={classes.skillsContainer}
                        >
                          <Grid item container justify="center">
                            <img
                              alt="Web dev graphic of a computer by Sam."
                              className={classes.customWebdevIcon}
                              src={WebdevIcon}
                            />
                          </Grid>
                          <Grid item>
                            <ul>
                              <Typography
                                variant="h3"
                                gutterBottom
                                className={classes.paperTitle}
                              >
                                Front-end Developer
                              </Typography>
                              <Typography variant="body2" gutterBottom>
                                I am comfortable building from scratch as well
                                as using frameworks and libraries when needed.
                              </Typography>
                              <Typography variant="h4" gutterBottom>
                                My Languages and Frameworks:
                              </Typography>
                              <ul className={classes.subUL}>
                                <Grid item container>
                                  <Grid item xs={6}>
                                    <li>
                                      <Typography variant="body2">
                                        HTML5
                                      </Typography>
                                    </li>
                                    <li>
                                      <Typography variant="body2">
                                        Javascript
                                      </Typography>
                                    </li>
                                    <li>
                                      <Typography variant="body2">
                                        CSS3
                                      </Typography>
                                    </li>
                                    <li>
                                      <Typography variant="body2">
                                        Next.js
                                      </Typography>
                                    </li>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <li>
                                      <Typography variant="body2">
                                        React.js
                                      </Typography>
                                    </li>
                                    <li>
                                      <Typography variant="body2">
                                        Material-UI
                                      </Typography>
                                    </li>
                                    <li>
                                      <Typography variant="body2">
                                        Chakra-UI
                                      </Typography>
                                    </li>
                                    <li>
                                      <Typography variant="body2">
                                        Framer-motion
                                      </Typography>
                                    </li>
                                  </Grid>
                                </Grid>
                              </ul>
                              <Typography variant="h4" gutterBottom>
                                My Development Tools:
                              </Typography>
                              <ul className={classes.subUL}>
                                <Grid item container>
                                  <Grid item xs={6}>
                                    <li>
                                      <Typography variant="body2">
                                        VSCode
                                      </Typography>
                                    </li>
                                    <li>
                                      <Typography variant="body2">
                                        Atom
                                      </Typography>
                                    </li>
                                    <li>
                                      <Typography variant="body2">
                                        Terminal
                                      </Typography>
                                    </li>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <li>
                                      <Typography variant="body2">
                                        Chrome Dev Tools
                                      </Typography>
                                    </li>
                                    <li>
                                      <Typography variant="body2">
                                        React Dev Tools
                                      </Typography>
                                    </li>
                                    <li>
                                      <Typography variant="body2">
                                        Google
                                      </Typography>
                                    </li>
                                  </Grid>
                                </Grid>
                              </ul>
                            </ul>
                            {/*End of web dev section of skills */}
                          </Grid>
                        </Grid>
                        <Grid
                          item
                          md={6}
                          xs={12}
                          className={classes.skillsContainer}
                        >
                          <Grid item container justify="center">
                            <img
                              alt="Design graphic of a lightbulb by Sam."
                              className={classes.customDesignIcon}
                              src={DesignIcon}
                            />
                          </Grid>
                          <Grid item>
                            <ul>
                              <Typography
                                variant="h3"
                                gutterBottom
                                className={classes.paperTitle}
                              >
                                Graphic Designer
                              </Typography>
                              <Typography variant="body2" gutterBottom>
                                I lean towards human centered design and know
                                the impact good user experience has on any
                                product.
                              </Typography>
                              <Typography variant="h4" gutterBottom>
                                My Areas of Interest:
                              </Typography>
                              <ul className={classes.subUL}>
                                <Grid item container>
                                  <Grid item xs={6}>
                                    <li>
                                      <Typography variant="body2">
                                        Web Design
                                      </Typography>
                                    </li>
                                    <li>
                                      <Typography variant="body2">
                                        UX Design
                                      </Typography>
                                    </li>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <li>
                                      <Typography variant="body2">
                                        App Design
                                      </Typography>
                                    </li>
                                    <li>
                                      <Typography variant="body2">
                                        Mobile first Design
                                      </Typography>
                                    </li>
                                  </Grid>
                                </Grid>
                              </ul>
                              <Typography variant="h4" gutterBottom>
                                My Design Tools:
                              </Typography>
                              <ul className={classes.subUL}>
                                <li>
                                  <Typography variant="body2">
                                    Figma
                                  </Typography>
                                </li>
                                <li>
                                  <Typography variant="body2">
                                    Affinity Designer (Illustrator)
                                  </Typography>
                                </li>
                                <li>
                                  <Typography variant="body2">
                                    Affinity Photo (Photo Editing)
                                  </Typography>
                                </li>
                                <li>
                                  <Typography variant="body2">
                                    Affinity Publisher (Layout Design)
                                  </Typography>
                                </li>
                                <li>
                                  <Typography variant="body2">
                                    Pen &amp; Paper
                                  </Typography>
                                </li>
                              </ul>
                            </ul>
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  ))
                }
              </Transition>
            </Paper>
          </Grid>
          {/*End of skills section content item */}
          <Grid item xs={1} sm={2} xl={3} className={classes.whiteColumn}>
            <Transition
              items={show}
              from={{ opacity: 0 }}
              enter={{ opacity: 1 }}
              delay={400}
            >
              {(show) =>
                show &&
                ((props) => (
                  <div style={props}>
                    <div className={classes.blueSpacer}></div>
                  </div>
                ))
              }
            </Transition>
          </Grid>
        </Grid>
      </Grid>
      {/*End of main container*/}
      <div className={classes.whiteSpacer}></div>
    </div>
  );
}
export default About;