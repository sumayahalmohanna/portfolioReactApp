import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ReactLogo from '../assets/images/ReactJs-Logo.svg';
import ReactSpringLogo from '../assets/images/React-Spring-Logo.png';
import MaterialUiLogo from '../assets/images/MaterialUi-Logo.svg';
import FormikLogo from '../assets/images/Formik-Logo.png';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#fff',
        color: theme.palette.secondary.main,
        minHeight: 'auto',
        fontSize: 'calc(5px + 1.8vmin)',
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
    },
    pushRight: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
    },
    builtWith: {
        maxWidth: '38px',
        height: 'auto',
    },
    socialBtns: {
        color: 'inherit',
        textDecoration: 'none',
    },
}));

function Footer() {

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction='row-reverse'>
                <Grid item md={6} xs={12}>
                    <Grid item container direction='column'>
                        <Grid item>
                        <Grid container spacing={2}>
                            <Grid item>
                            <a className={classes.socialBtns} href="https://www.linkedin.com/in/sumayahalmohanna" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                            </svg></a>
                            </Grid>
                            <Grid item>
                            <a className={classes.socialBtns} href="https://github.com/sumayahalmohanna" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="32   " height="32   " viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                            </svg></a>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Typography variant='body2' gutterBottom>
                                © 2015-2021 sumayahdesigns.com</Typography>
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={6} xs={12}>
                <Grid item container direction='column'>
                        <Grid item>
                        <Grid container>
                        <Typography variant='body2' gutterBottom>
                            Coded with <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg> by Sam Almohanna using:</Typography>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item>
                            <img alt="Website was built with React.js"
                            className={classes.builtWith}
                            src={ReactLogo}
                        />
                            </Grid>
                            <Grid item>
                            <img alt="Website was built with Material-Ui"
                            className={classes.builtWith}
                            src={MaterialUiLogo}
                        />
                            </Grid>
                            <Grid item>
                            <img alt="Website was built with ReactSpring"
                            className={classes.builtWith}
                            src={ReactSpringLogo}
                        />
                            </Grid>
                            <Grid item>
                            <img alt="Website was built with Formik"
                            className={classes.builtWith}
                            src={FormikLogo}
                        />
                            </Grid>
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;


/*<a className={classes.socialBtns} href="https://dribbble.com/Sam_A" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="currentColor" role="img" class="icon fill-current">
<rect width="32" height="32" fill="black" fill-opacity="0"></rect>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C7.16703 0 0 7.16703 0 16C0 24.833 7.16703 32 16 32C24.8156 32 32 24.833 32 16C32 7.16703 24.8156 0 16 0ZM26.5683 7.37527C28.4772 9.70065 29.6226 12.6681 29.6573 15.8785C29.2061 15.7918 24.6941 14.872 20.1475 15.4447C20.0434 15.2191 19.9566 14.9761 19.8525 14.7332C19.5748 14.0738 19.2625 13.397 18.9501 12.7549C23.9826 10.7072 26.2733 7.75705 26.5683 7.37527ZM16 2.36009C19.4707 2.36009 22.6464 3.66161 25.0586 5.7961C24.8156 6.14317 22.7505 8.90239 17.8915 10.7245C15.6529 6.61171 13.1714 3.24512 12.7896 2.72451C13.8134 2.48156 14.8894 2.36009 16 2.36009ZM10.1866 3.64425C10.551 4.13015 12.9805 7.5141 15.2538 11.5401C8.86768 13.2408 3.22777 13.2061 2.62039 13.2061C3.50542 8.9718 6.36876 5.44902 10.1866 3.64425ZM2.32538 16.0174C2.32538 15.8785 2.32538 15.7397 2.32538 15.6009C2.9154 15.6182 9.54447 15.705 16.3644 13.6573C16.7636 14.4208 17.128 15.2017 17.4751 15.9826C17.3015 16.0347 17.1106 16.0868 16.9371 16.1388C9.89154 18.4121 6.14317 24.6247 5.8308 25.1453C3.6616 22.7332 2.32538 19.5228 2.32538 16.0174ZM16 29.6746C12.8416 29.6746 9.92625 28.5987 7.61822 26.7939C7.86117 26.2907 10.6377 20.9458 18.3427 18.256C18.3774 18.2386 18.3948 18.2386 18.4295 18.2213C20.3557 23.2017 21.1367 27.3839 21.3449 28.5813C19.6963 29.2928 17.8915 29.6746 16 29.6746ZM23.6182 27.3319C23.4794 26.4989 22.7505 22.5076 20.9631 17.5965C25.2495 16.9197 28.9978 18.0304 29.4664 18.1866C28.8764 21.987 26.6898 25.2668 23.6182 27.3319Z"></path>
</svg>
          </a>  */