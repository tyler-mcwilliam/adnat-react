export default function organisationsReducer(state = null, action) {
  switch (action.type) {
    case 'FETCH_ORGANISATIONS':
      return action.payload;
    case 'ORGANISATION_POSTED':
      if (state.map(organisation => organisation.id).includes(action.payload.id)) {
        return state;
      } else {
        const copiedState = state.slice(0);
        copiedState.push(action.payload);
        return copiedState;
      }
    default:
      return state;
  }
}
