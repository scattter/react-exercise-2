import React, { Component } from 'react'
import imgUrl from '../assets/product_image_placeholder.png'


class Phone extends Component {
    state = {
        category: this.props.category,
        price: this.props.price,
        name: this.props.name,
        value: 0,
    }
    handleIncream = () => {
        console.log(this.state.value);
        this.setState({
            value: this.state.value + 1,
        })
        this.props.handleClick();
    }
    render() {
        return (
            <div className='phone' >
                <div className='title' >{this.props.title}</div>
                <img src={imgUrl}></img>
                <div>
                    <p className='price'>{this.props.price}</p>
                    <p className='addToCart' onClick={this.handleIncream}>add to cart {this.state.value}</p>
                </div>
            </div >
        )
    }
}
export default Phone;