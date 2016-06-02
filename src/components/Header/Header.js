/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import IndexLink from '../Link';

function Header() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <IndexLink className={s.back + ' fa fa fa-arrow-left'} to="/" activeClassName="active"/>
      </div>
    </div>
  );
}

export default withStyles(s)(Header);
