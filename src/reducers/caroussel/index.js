import { NEXT_IMAGE, LOADING_IMAGES, PREVIOUS_IMAGE } from './actions'

const initialState = {
  carossel: {
    photos: [],
    activeImage: 0
  }
}

const carossel = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_IMAGES:
      return {
        ...state,
        carossel: {
          ...state.carossel,
          photos: action.payload.imagesCarossel
        }
      }
    case NEXT_IMAGE:
      const count = state.carossel.photos.length - 1
      return {
        ...state,
        carossel: {
          ...state.carossel,
          activeImage: state.carossel.activeImage === count ? 0 : state.carossel.activeImage += 1
        }
      }
    case PREVIOUS_IMAGE:
      return {
        ...state,
        carossel: {
          ...state.carossel,
          activeImage: state.carossel.activeImage -= 1
        }
      }
    default:
      return state
  }
}

export default carossel