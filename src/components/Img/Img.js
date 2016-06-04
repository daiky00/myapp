import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Img.css';

function Img(props) {
  return (
    <img className={s.img} { ...props }/>
  );
}

export default withStyles(s)(Img);