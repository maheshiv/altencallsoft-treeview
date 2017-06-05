export default (state, action) => {
  let modifiedState;
  switch (action.type) {
    case 'SEARCH_IN_TREE':
      modifiedState = {
        ...state,
        filter: action.filter
      }
      break;
    default:
      modifiedState = state;
  }
  return modifiedState;
}
