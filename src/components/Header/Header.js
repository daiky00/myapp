import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import cx from 'classnames';
import IndexLink from '../Link';

function Header() {

  return (
    <div className={s.root}>
        <IndexLink className={cx(s.back, 'fa fa fa-arrow-left')} to="/" />
    </div>
  );
}

export default withStyles(s)(Header);
