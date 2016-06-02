import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Content.css';

function Content(props) {
  return (
    <main className={s.content} { ...props }/>
  );
}

export default withStyles(s)(Content);