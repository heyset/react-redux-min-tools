import stateClone from './stateClone';

const createReducer = (
  initialState,
  actions,
  cloningFunction = stateClone,
) => (
  state = initialState,
  { type, payload },
) => (actions[type] ? actions[type](cloningFunction(state), payload, state) : state);

export default createReducer;
