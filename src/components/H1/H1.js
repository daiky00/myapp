import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './H1.css';

function H1(props) {
  return (
    <h1 className={s.heading} { ...props }/>
  );
}

export default withStyles(s)(H1);