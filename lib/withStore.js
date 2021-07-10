import { connect } from 'react-redux';

const INVALID_INDEX = -1;

const getMutualEntries = (arr1, arr2) => arr1.filter(
  (key) => arr2.indexOf(key) > INVALID_INDEX,
);

const withStore = (component, stateKeys, agentArray) => {
  if (!stateKeys) {
    stateKeys = [];
  }

  const mapStateToProps = stateKeys.length
    ? (storeState) => {
      const storeKeys = Object.keys(storeState);
      const keys = getMutualEntries(stateKeys, storeKeys);

      const props = {};

      keys.forEach((key) => {
        props[key] = storeState[key];
      });

      return props;
    }
    : null;

  if (!agentArray) return connect(mapStateToProps)(component);

  const mapDispatchToProps = (dispatch) => {
    const props = {};

    agentArray.forEach((agent) => {
      props[agent.name] = (payload) => dispatch(agent(payload));
    });

    return props;
  };

  return connect(mapStateToProps, mapDispatchToProps)(component);
};

export default withStore;
