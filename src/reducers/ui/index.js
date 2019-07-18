import { SHOW_INTRO } from './actions'

const ui = (state = {}, action) => {
  switch (action.type) {
    case SHOW_INTRO:
      return {
        ...state,
        showIntro: action.visible

      }
    default:
      return state
  }
}

export default ui
