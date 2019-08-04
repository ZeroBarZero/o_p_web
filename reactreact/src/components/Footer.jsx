import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: 'white',
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Footer
    </div>
  );
}

export default Footer;