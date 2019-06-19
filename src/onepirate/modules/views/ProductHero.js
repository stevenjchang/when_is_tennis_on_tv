import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import Paper from '@material-ui/core/Paper';

const backgroundImage =
  // 'https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80';
  '/static/themes/onepirate/tennis-575578-unsplash.jpg';

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center"
  },
  button: {
    minWidth: 200
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(4)
    }
  },
  more: {
    marginTop: theme.spacing(2)
  },
  title1: {
    maxWidth: "625px"
  },
  paper: {
    padding: theme.spacing(2, 6),
    backgroundColor: "#ffff7e",
    // marginTop: "-4.5%",
    marginBottom: "30px"
  }
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: "none" }} src={backgroundImage} alt="" />
      <Paper className={classes.paper}>
        The draw for Wimbledon will be available starting 06/28
      </Paper>
      <Typography
        color="inherit"
        align="center"
        variant="h3"
        marked="center"
        className={classes.title1}
      >
        {/* Upgrade your Sundays */}
        Get FREE email alerts when the next match happens.
        <br />
        <br />
        <Typography
          color="inherit"
          align="center"
          variant="h5"
          marked="center"
        >
          Follow your favorite players.
          <br />
          <br />
        </Typography>
      </Typography>

      <Typography
        color="inherit"
        align="center"
        variant="h7"
        className={classes.h5}
      >
        {/* Enjoy secret offers up to -70% off the best luxury hotels every Sunday. */}
        Simple and easy. Never miss another match!
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/#sign-up"
      >
        {/* Register */}
        Choose Players
      </Button>
      <Typography variant="h8" color="inherit" className={classes.more}>
        {/* Discover the experience */}
        {/* No Spam! This a hobby project, made for tennis fans. */}
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
