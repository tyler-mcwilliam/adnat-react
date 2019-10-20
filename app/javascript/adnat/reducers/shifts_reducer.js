export default function shiftsReducer(state = null, action) {
  switch (action.type) {
    case 'FETCH_SHIFTS':
      return action.payload;
    case 'SHIFT_POSTED':
      if (state.map(shift => shift.id).includes(action.payload.id)) {
        return state;
      } else {
        const copiedState = state.slice(0);
        copiedState.push(action.payload);
        return copiedState;
      }
    case 'ORGANISATION_SELECTED':
      return []; // Organisation has changed. Clearing view.
    default:
      return state;
  }
}
