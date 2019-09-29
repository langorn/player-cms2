const buttons = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      console.log(action.type)
      return [
        ...state,
        {
          display: !!state.display
        }
      ]
    default:
      return state
  }
}

export default buttons
