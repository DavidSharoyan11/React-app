import React, { Component } from 'react'
import AboutCards from './aboutCards/AboutCards';
import AboutServices from "./aboutServices/AboutServices";

export class AboutSection extends Component {
  render() {
    return (
      <section>
        <AboutCards/>
        <AboutServices/>
      </section>
    )
  }
}

export default AboutSection;