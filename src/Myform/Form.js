import React, { Component } from 'react'

class Form extends Component {
    state = {
        name: '',
        email: '',
    }

    handleName = (event) => {
        this.setState({
            name: event.target.value,
        })
    }
    handleEmail = (event) => {
        this.setState({
            email: event.target.value,
        })
    }

    handleSubmit = (event) => {
        alert(JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='name'>
                    <label htmlFor='name'>name</label>
                    <input type='text' value={this.state.name1} onChange={this.handleName} ></input>
                </div>
                <div className='email'>
                    <label htmlFor='email'>email</label>
                    <input type='text' value={this.state.email} onChange={this.handleEmail}></input>
                </div>
                <input type='submit' value='submit' disabled={!this.state.name || !this.state.email}></input>
            </form>
        )

    }
}

export default Form;