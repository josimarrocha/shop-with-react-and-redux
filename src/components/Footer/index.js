import React from 'react'
import './styles.css'

const Footer = () => {
  return (
    <section className='footer mt-5 px-2' >
      <footer className="container-fluid py-4 px-md-5 px-sm-3">
        <div className="row">
          <div className="social-media col-12 col-sm-4 col-md-4 ml-sm-2">
            <h5 className='text-uppercase'>Redes socias</h5>
            <div className='d-flex'>
              <div className="facebook mt-2">
                <a href="">
                  <i className="fab fa-facebook-f mr-2 px-2 pt-2" />
                </a>
              </div>
              <div className="github mt-2">
                <a href="">
                  <i className="fab fa-github mr-2 px-2 pt-2" />
                </a>
              </div>
              <div className="linkedin mt-2">
                <a href="">
                  <i className="fab fa-linkedin-in mr-2 px-2 pt-2" />
                </a>
              </div>
            </div>
          </div>
          <div className="contatos col-12 col-sm-6 col-md-5 ml-sm-4 mt-2 mt-sm-0 mt-md-0">
            <h5 className='text-uppercase'>Contatos</h5>
            <p className='mt-3 mb-1'>
              <span className='mr-1'>Email:</span>
              josimarsantosdarocha@gmail.com
              </p>
            <p className='mb-1'>
              <span className='mr-1'>Telefone:</span>
              11 - 9999-9999
              </p>
            <p>
              <span className='mr-1'>Endereço:</span>
              Lorem ipsum dolor sit amet, 58, SP
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer
