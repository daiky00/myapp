import React from 'react';
import App from '../components/App';

// Child routes
import home from './home';
import dribbble from './dribbble';
import behance from './behance';
import linkedin from './linkedin';
import twitter from './twitter';
import instagram from './instagram';
import vimeo from './vimeo';
import error from './error';

export default {

  path: '/',

  children: [
    home,
    dribbble,
    behance,
    linkedin,
    twitter,
    instagram,
    vimeo,
    error
  ],

  async action({ next, render, context }) {
    const component = await next();
    if (component === undefined) return component;
    return render(
      <App context={context}>{component}</App>
    );
  },

};
