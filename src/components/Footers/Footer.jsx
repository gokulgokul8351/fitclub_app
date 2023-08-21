import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instagram from '../../assets/instagram.png'
import Linkedin from '../../assets/limkedin.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img
            src={Github}
            alt=""
            style={{ width: '55px', height: '55px' }}
          />
          <img
            src={Instagram}
            alt=""
            style={{ width: '50px', height: '50px' }}
          />
          <img
            src={Linkedin}
            alt=""
            style={{ width: '50px', height: '50px' }}
          />
        </div>
        <div className="logo-f">
          <img
            src={Logo}
            alt=""
          />
        </div>
      </div>

      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>

      <div className="footer-end">
        <p>
          Copyrights by{' '}
          <span className="stroke-text">Gokul_Front-End_Forever </span>
          &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
