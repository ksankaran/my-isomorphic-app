export const UPDATE_TOPICS = 'Topics/UPDATE_TOPICS';

function action(type, payload = {}) {
  return { type, ...payload };
}

export const updateTopics = (items) => action(UPDATE_TOPICS, { items });
