import * as ActionTypes from '../constants/ActionTypes';

const initialState = [{
  text: 'Use Redux',
  completed: false,
  id: 0
}];

const actionsMap = {
  [ActionTypes.TAKE_SNAPSHOT](state/*, action*/) {
    console.log("reduce: TAKE_SNAPSHOT");
    return Object.assign({}, state, {
      snapshot: "",
      hasSnapshot: false
    });
  },
  [ActionTypes.RECEIVE_SNAPSHOT](state, action) {
    console.log("reduce: RECEIVE_SNAPSHOT");
    return Object.assign({}, state, {
      snapshot: action.html,
      hasSnapshot: true
    });
  },
  [ActionTypes.SET_BASELINE](state/*, action*/) {
    console.log("reduce: SET_BASELINE");
    return Object.assign({}, state, {
      baseline: "",
      hasBaseline: false
    });
  },
  [ActionTypes.RECEIVE_BASELINE](state, action) {
    console.log("reduce: RECEIVE_BASELINE");
    return Object.assign({}, state, {
      baseline: action.html,
      hasBaseline: true,
      snapshot: "",
      baselineMeta: action.meta
    });
  },
  [ActionTypes.DO_DIFF](state, action) {
    console.log("reduce: DO_DIFF");
    return Object.assign({}, state, {
      diff: action.diff
    });
  },
}; 

export default function diffs(state = initialState, action) {
  const reduceFn = actionsMap[action.type];
  if (!reduceFn) return state;
  return reduceFn(state, action);
}