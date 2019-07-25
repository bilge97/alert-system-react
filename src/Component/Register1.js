import React, { Component } from 'react';
import axios from 'axios';


class Login extends Component {

    state = {values:[]};
    state = {termUsername:'' , termPassword:''}; 

  constructor(props) {
    super(props);
    this.state = {
      termUsername: '',
      termPassword: '',
      error: '',
    };

    
   
  }
  onFormSubmit = event => {
    event.preventDefault();
    const register={
      username: this.state.termUsername,
      password: this.state.termPassword
  }
    axios.post('http://localhost:8081/login', register).then((response) => {

        console.log(response.data);
    });

}



  handleSubmit(evt) {
    evt.preventDefault();

    
    
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {

    return (
      <div className="Register">
        <form class="register-form" onSubmit={event => this.onFormSubmit(event)}>
            <ul><input type="text" placeholder="username" onChange={e => this.setState({termUsername: e.target.value})}/></ul>
            <ul><input type="password" placeholder="password" onChange={e => this.setState({termPassword: e.target.value})}/></ul>
            <ul><button onClick={this.handleClick}>Register</button></ul>
          
        </form>
      </div>
    );
  }
};

export default Login;