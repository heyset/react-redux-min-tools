import cloneDeep from "clone-deep";

const createReducer = (initialState, actions, cloningFunction = cloneDeep) => (state = initialState, { type, payload }) => (actions[type] ? actions[type](cloningFunction(state), payload, state) : state);

export default createReducer;
