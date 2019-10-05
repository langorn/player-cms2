const buttons = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return {
          display: !state.display
      }
    default:
      return state
  }
}

export default buttons
