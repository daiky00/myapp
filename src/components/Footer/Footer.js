import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Navigation from '../Navigation';

function Footer() {
  return (
    <div className={s.footer}>
      <Navigation />
    </div>
  );
}

export default withStyles(s)(Footer);
