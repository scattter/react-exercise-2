import React, { Component } from 'react';
import imgCart from '../assets/cart.png'
import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <div className='Header'>
            <h1 style={{ color: '#fff', marginLeft: '10px' }}>Store</h1>
            <img src={imgCart} alt='placeholder'></img>
            <p>{props.count}</p>
        </div >
    )
}


export default Header;