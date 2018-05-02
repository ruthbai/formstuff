import React from 'react'

export default class Form extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: ''
    }


    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state); // this connects to App.js on submit it will pass data to app.js
        this.setState({
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: ''//this will clear passwords on screen after submit
        })
    }


    render() {
        return (
            <form>
            <input 
            name="firstName"
            placeholder='First name' 
            value={this.state.firstName}  //For the first form box where it says FirstName it will display firstname in state
            onChange={e => this.change(e)} //Whatever users type in it will be typed in
            />
            <br />
            <input 
            name="lastName"
            placeholder='Last name'
            value={this.state.lastName} 
            onChange={e => this.change(e)}
            />
            <br />
            <input 
            name="userName"
            placeholder='User name'
            value={this.state.userName}
            onChange={e => this.change(e)}
            />
            <br />
            <input 
            name="email"
            placeholder='Email'
            value={this.state.email}
            onChange={e => this.change(e)}
            />
            <br />
            <input 
            name="password"
            type="password"
            placeholder='Password'
            value={this.state.password}
            onChange={e => this.change(e)}
            />
            <br />
            <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        );
    }
}


// you can do it this way as well

//     render() {
//         return (
//             <form>
//             <input placeholder='First name' 
//             value={this.state.firstName}  //For the first form box where it says FirstName it will display firstname in state
//             onChange={e => this.setState({ firstName: e.target.value})} //Whatever users type in it will be typed in
//             />
//             <input placeholder='Last name'
//             value={this.state.lastName} 
//             onChange={e => this.setState({ lastName: e.target.value})}
//             />
//             <input placeholder='User name'
//             value={this.state.userName}
//             onChange={e => this.setState({ userName: e.target.value})}
//             />
//             <input placeholder='Email'
//             value={this.state.email}
//             onChange={e => this.setState({ email: e.target.value})}
//             />
//             <input placeholder='Password'
//             value={this.state.password}
//             onChange={e => this.setState({ password: e.target.value})}
//             />
//             </form>
//         );
//     }
// }

