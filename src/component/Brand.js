import React, { Component } from 'react';
import Phone from './Phone';

const Brand = (props) => {

    return (
        <div className='Brand'>
            <h3 style={{ marginTop: '20px' }}>{props.brand}</h3>
            <Phone handleClick={props.handleClick} title={props.phone[0].name} price={props.phone[0].price} />
            <Phone handleClick={props.handleClick} title={props.phone[1].name} price={props.phone[1].price} />
            <Phone handleClick={props.handleClick} title={props.phone[2].name} price={props.phone[2].price} />
        </div>
    )
}
export default Brand;