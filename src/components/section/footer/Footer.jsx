import React, { Component } from 'react';
import './Footer.css';
import img from './img-01.jpg'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer__content">
            <img src={img} alt=''/>
            <div className='footer__info'>
                <h3>Maecenas nulla neque</h3>
                <p>Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.</p>
                <button>Read More</button>
            </div>
        </div>
        <div className='footer__copyright'>Copyright © 2045 Simple House | Design: TemplateMo</div>
      </footer>
    )
  }
}

export default Footer;