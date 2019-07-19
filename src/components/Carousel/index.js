import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ImageCarousel from './ImageCarousel'
import { loadingImagesCarossel, nextItem, previousItem } from '../../reducers/caroussel/actionsCreators'
import './styles.css'

const Carousel = ({ loadingImages, imagesCarossel: { carossel }, nextImage, previousImage }) => {
  useEffect(() => {
    loadingImages()

  }, [loadingImages])

  return (
    <section className="header-intro d-flex justify-content-center">
      <i
        onClick={() => carossel.activeImage > 0 && previousImage()}
        className="fas fa-arrow-left previous "
      ></i>

      <div className="header-img-itro">
        <ImageCarousel path={carossel.photos[carossel.activeImage]} />
      </div>

      <i
        onClick={() => nextImage()}
        className="fas fa-arrow-right next"
      ></i>
    </section>
  )
}

const mapStateToProps = state => ({
  imagesCarossel: state.carossel
})

export default connect(mapStateToProps,
  {
    loadingImages: loadingImagesCarossel,
    nextImage: nextItem,
    previousImage: previousItem
  })(Carousel)
