const createAgent = (type) => {
  const action = (payload) => ({ type, payload });
  Object.defineProperty(action, 'name', {
    writable: false,
    value: type,
  });

  return action;
};

export default createAgent;
