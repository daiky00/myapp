import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Paragraph.css';

function Paragraph(props) {
  return (
    <p className={s.paragraph} { ...props }/>
  );
}

export default withStyles(s)(Paragraph);