import React, { Component } from 'react';
import Cards from './cards/Cards';
import './Section.css'
import Footer from "./footer/Footer";

export class Section extends Component {

  

  render() {
    return <section>
        <div className="info__content">
            <h2>Welcome to Simple House</h2>
            <p>Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.</p>
        </div>
        <Cards/>
        <Footer/>
    </section>
  }
}

export default Section;