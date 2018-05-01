import React from 'react'

export default class Form extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: ''
    }

    render() {
        return (
            <form>
            <input placeholder='First name' 
            value={this.state.firstName}  //For the first form box where it says FirstName it will display firstname in state
            onChange={e => this.setState({ firstName: e.target.value})} //Whatever users type in it will be typed in
            />
            <input placeholder='Last name'
            value={this.state.lastName} 
            onChange={e => this.setState({ lastName: e.target.value})}
            />
            <input placeholder='User name'
            value={this.state.userName}
            onChange={e => this.setState({ userName: e.target.value})}
            />
            <input placeholder='Email'
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value})}
            />
            <input placeholder='Password'
            value={this.state.password}
            onChange={e => this.setState({ password: e.target.value})}
            />
            </form>
        );
    }
}

