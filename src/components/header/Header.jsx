import React from 'react';
import './Header.css';
import Image from './simple-house-logo.png';
import {NavLink} from 'react-router-dom';

class Header extends React.Component {
    render(){
        return <header>
            <div className='header-content'>
                <div className='header__title'>
                    <img src={Image}/>
                    <div>
                        <h2>Simple House</h2>
                        <h6>new restaurant template</h6>
                    </div>
                </div>
                <ul>
                    <li><NavLink to='/home'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>
        </header>
    }
}

export default Header;