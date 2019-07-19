import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const ImageCarousel = ({ path }) => {
  return (
    <ReactCSSTransitionGroup
      transitionName='show'
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={300}
    >
      <img
        src={path}
        className={`img-fluid img-item-caroussel`}
        alt="Smartphones Top de Linha" />
    </ReactCSSTransitionGroup >
  )
}

export default ImageCarousel
