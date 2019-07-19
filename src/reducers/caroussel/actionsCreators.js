import { NEXT_IMAGE, LOADING_IMAGES, PREVIOUS_IMAGE } from './actions'
import imagesCarossel from '../../produtos'

let proximo = true
export const loadingImagesCarossel = () => dispatch => {
  proximo && setInterval(() => dispatch({
    type: NEXT_IMAGE
  }), 5000)
  proximo = false
  dispatch({
    type: LOADING_IMAGES,
    payload: imagesCarossel
  })
}

export const nextItem = () => dispatch => {
  dispatch({
    type: NEXT_IMAGE
  })
}
export const previousItem = () => dispatch => {
  dispatch({
    type: PREVIOUS_IMAGE
  })
}