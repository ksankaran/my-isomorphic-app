import React from 'react';
import { connect } from 'react-redux';
import { topicsSelector } from '../selector';
import get from 'lodash/get';

const Topics = ({ items }) => (
  <ul>
    {items.map((item, idx) => <li key={idx}><a href={get(item, 'data.url', '#')}>{get(item, 'data.title', '')}</a></li>)}
  </ul>
);

export default connect(
  state => ({ items: topicsSelector(state) }),
  {}
)(Topics);
