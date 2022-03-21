import React from 'react';
import { CircularProgress } from '@material-ui/core';
import useStyles from './styles'; //useStyles is a hook

const Progress = () => {
  const classes = useStyles();
  return (
    <div className={classes.loading}>
      <CircularProgress size='5rem' />
    </div>
  );
};

export default Progress;
