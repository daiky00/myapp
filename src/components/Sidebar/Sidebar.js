import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Sidebar.css';

function Content(props) {
  return (
    <aside className={s.sidebar} { ...props }/>
  );
}

export default withStyles(s)(Content);