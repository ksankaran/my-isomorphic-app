import get from 'lodash/get';

export const topicsSelector = (state) =>
  get(state, ['topicsReducer', 'items']);
