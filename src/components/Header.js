import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link, withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

  appBar: {
    backgroundColor: theme.palette.secondary.main,
    boxShadow: 'none',
  },
  menuIcon: {
    backgroundColor: props => ((props.location.pathname === '/home/about') ? '#fff' : theme.palette.secondary.main ),
    color: props => ((props.location.pathname === '/home/about') ? theme.palette.secondary.main : '#fff' ),
    marginRight: theme.spacing(3)
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#2c6eae',
  },
  root: {
    flexGrow: 1,
  },
  navButtonGroup: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
  },
  navButton: {
    marginRight: theme.spacing(3),
    color: '#fff',
    borderColor: '#fff',
  },
  title: {
    marginLeft: theme.spacing(3),
    color: '#fff',
    textDecoration: 'none',
    [theme.breakpoints.down('md')]: {
      flexGrow: 1
    }
  },
}));

const Header = props => {
  const classes = useStyles(props);
  const { history } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (pageURL) => {
    history.push('/home' + pageURL);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    handleClick(pageURL);
    setAnchorEl(null);
  };

  const navItems = [
    {
      navLabel: 'About',
      pageURL: '/about'
    },
    {
      navLabel: 'Case Studies',
      pageURL: '/caseStudies'
    },{
      navLabel: 'Contact',
      pageURL: '/contact'
    }
  ];

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position='static'>
            <Toolbar>
            <Link to='/'  className={classes.title}><Typography variant="h6">
            Sam Almohanna
          </Typography></Link>
          <Hidden mdUp>
              <IconButton edge="end" className={classes.menuIcon} onClick={handleMenu} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {navItems.map(navItem => {
                  const { navLabel, pageURL } = navItem;
                  return (
                    <MenuItem key={navItem.navLabel} className={classes.menuButton} onClick={() => handleMenuClick(pageURL)}>{navLabel}</MenuItem>
                  );
                })}
              </Menu>
        </Hidden>
        <Hidden smDown>
                  <div className={classes.navButtonGroup}>
                  {navItems.map(navItem => {
                        const { navLabel, pageURL } = navItem;
                        return (
                          <Button key={navItem.navLabel} className={classes.navButton} variant='outlined' onClick={() => handleClick(pageURL)}>{navLabel}</Button>
                        );
                      })}
                  </div>
        </Hidden>
            </Toolbar>
          </AppBar>
    </div>
  );
};

export default withRouter(Header);
