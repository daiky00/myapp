import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Button.css';

function Button(props) {
  return (
    <button className={s.button} { ...props }/>
  );
}

export default withStyles(s)(Button);