import React, { Component } from 'react';
import './App.scss';
import Header from './component/Header'
import Goods from './component/Goods';
import { groupBy } from 'lodash';

class App extends Component {
  state = {
    count: 0,
    productGroups: [],
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  componentDidMount() {
    fetch('http://localhost:3000/products')
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(new Error(response.status + response.statusText));
      })
      .then((data) => {
        const productGroups = Object.entries(groupBy(data, 'category')).map(
          (entry) => ({
            category: entry[0],
            products: entry[1],
          })
        );

        this.setState({ productGroups });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <main className="app">
        <Header count={this.state.count} />
        {this.state.productGroups.map(
          (group, index) => (<Goods
            key={index}
            groupName={group.category}
            products={group.products}
            handleClick={this.handleClick}
          ></Goods>)
        )}
      </main>
    );
  }
}

export default App;
