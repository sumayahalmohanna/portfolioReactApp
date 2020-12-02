import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Hidden from '@material-ui/core/Hidden';
import About from '../About/About';
import Skills from '../Skills/Skills';
import CaseStudies from '../CaseStudies/CaseStudies';
import Contact from '../Contact/Contact';
import FoFPage from '../FoFPage';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  appBar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    color: props => ((props.match.params.page === "contact") ? '#d7dfe4' : '#2c6eae' ),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: props => ((props.match.params.page === "skills") ? '#e6d335' : '#2c6eae' ),
    color: props => ((props.match.params.page === "skills") ? '#0c0e14' : '#d7dfe4' ),
  },
  menu: {
    marginRight: theme.spacing(2),
    color: '#2c6eae',
  },
  pushTabsLeft: {
    marginLeft: 'auto',
  },
}));

const Home = props => {
  const classes = useStyles(props);
  const { match, history } = props;
  const { params } = match;
  const { page } = params;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const tabNameToIndex = {
    0: "about",
    1: "skills",
    2: "caseStudies",
    3: "contact",
  };

  const indexToTabName = {
    about: 0,
    skills: 1,
    caseStudies: 2,
    contact: 3,
  };

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/home/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (newValue) => {
    history.push(`/home/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
    setAnchorEl(null);
  };

  return (
    <>
        <Hidden mdUp>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} onClick={handleMenu} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem className={classes.menu} onClick={() => handleMenuClick(0)}>About</MenuItem>
                <MenuItem className={classes.menu} onClick={() => handleMenuClick(1)}>Skils & Tools</MenuItem>
                <MenuItem className={classes.menu} onClick={() => handleMenuClick(2)}>Case Studies</MenuItem>
                <MenuItem className={classes.menu} onClick={() => handleMenuClick(3)}>Contact</MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>
        </Hidden>
        <Hidden smDown>
            <AppBar className={classes.appBar} position='absolute'>
              <Tabs className={classes.pushTabsLeft} indicatorColor={'primary'} value={selectedTab} onChange={handleChange}>
                <Tab label="About" />
                <Tab label="Skills & Tools" />
                <Tab label="Case Studies" />
                <Tab label="Contact" />
              </Tabs>
            </AppBar>
        </Hidden>
      {selectedTab == null && <FoFPage />}
      {selectedTab === 0 && <About />}
      {selectedTab === 1 && <Skills />}
      {selectedTab === 2 && <CaseStudies />}
      {selectedTab === 3 && <Contact />}

    </>
  );
};

export default Home;
