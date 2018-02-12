import React from 'react';
import { connect } from 'react-redux';
import { topicsSelector } from '../selector';

const Topics = ({ items }) => (
  <ul>
    {items.map((item, idx) => <li key={idx}>{item.title}</li>)}
  </ul>
);

export default connect(
  state => ({ items: topicsSelector(state) }),
  {}
)(Topics);
