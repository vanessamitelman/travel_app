import React from 'react';
import useStyles from './styles'; //useStyles is a hook
import { InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const AutocompleteField = () => {
  const classes = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.icon}>
        <div style={{ position: 'absolute', top: '4px' }}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder='Search...'
          classes={{ root: classes.root, input: classes.input }}
          style={{ paddingLeft: '28px' }}
        />
      </div>
    </div>
  );
};

export default AutocompleteField;
