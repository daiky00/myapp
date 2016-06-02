
import React, { PropTypes, Components } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';


function Navigation({ className }) {
  return (
    <div className={cx(s.root, className)} role="navigation">
      <Link className={cx(s.link, 'fa fa-dribbble')} to="/dribbble" />
      <Link className={cx(s.link, 'fa fa-behance')} to="/behance" />
      <Link className={cx(s.link, ' fa fa-linkedin')} to="/linkedin" />
      <Link className={cx(s.link, ' fa fa-twitter')} to="/twitter" />
      <Link className={cx(s.link, ' fa fa-instagram')} to="/instagram" />
      <Link className={cx(s.link, ' fa fa-vimeo')} to="/vimeo" />
    </div>
  );
}

Navigation.propTypes = {
  className: PropTypes.string
};

export default withStyles(s)(Navigation);
