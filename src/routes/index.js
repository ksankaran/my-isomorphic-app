import React from 'react';
import Home from '../components/Home';
import Topics from '../components/Topics';
import NotFound from '../components/NotFound';

export default [
  {
    path: '/', component: Home,
  },
  {
    path: '/topics', component: Topics
  },
  {
    component: NotFound
  }
]