import React, { Component } from 'react';

import Brand from './Brand';

class Goods extends Component {

    state = {
        HUAWEI: {
            brand: 'HUAWEI',
            phone: {
                phone1: 'HUAWEI P40 Pro+',
                phone2: 'HUAWEI Mate 30',
                phone3: 'HUAWEI nova 7'
            },
            price: {
                price1: '7999',
                price2: '5000',
                price3: '4000'
            }
        },
        iPhone: {
            brand: 'iPhone',
            phone: {
                phone1: 'iPhone11',
                phone2: 'iPhoneXS',
                phone3: 'iPhoneSE'
            },
            price: {
                price1: '5999',
                price2: '5399',
                price3: '3599'
            }
        },
        count: 0,
    }
    handleClick = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }
    render() {
        const { groupName, products, handleClick } = this.props;
        return (
            <div className='Goods' >
                <p onClick={this.props.handleClick}>{this.state.count}</p>
                <Brand handleClick={handleClick} brand={groupName} phone={products} />
            </div >
        )
    }
}
export default Goods;