import { SHOW_INTRO } from './actions'

export const showIntro = (visible) => dispatch => {
  dispatch({
    type: SHOW_INTRO,
    visible
  })
}