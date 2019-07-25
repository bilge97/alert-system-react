import React from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Link} from "react-router-dom";


class Login extends React.Component {

    state = {values: [] , resp: []};
    state = {termUsername:'' , termPassword:'' , count:0 ,  flagchange:false}; 

    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
        this.state = {id:0};
      }

      handleLoginClick() {
        this.setState({isLoggedIn: true});
      }
    
      handleLogoutClick() {
        this.setState({isLoggedIn: false});
      }

    componentDidMount(){
    axios.get(`http://localhost:8081/logins`).then((result) => {

      //console.log(result.data);
      let newValues = {values: result.data};
      this.setState(newValues);
      console.log(this.state.values);
     
      let mp = result.data.map(item => {
        
    });
    this.setState({resp: mp});
    console.log(mp);
  });


  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    axios.get(`http://localhost:8081/logins`).then((result) => {

        //console.log(result.data);
      let newValues = {values: result.data};
      this.setState(newValues);
      for(this.state.count=0 ; this.state.count<this.state.values.length ; this.state.count++)
      {
          if(this.state.values[this.state.count].username == this.state.termUsername 
                && this.state.values[this.state.count].password == this.state.termPassword
                && this.state.flag == true)
          {
            this.changePage(this.state.values[this.state.count].id);
           
            this.state.flagchange =true;
            this.state.id =this.state.values[this.state.count].id;
            //alert(this.state.id);
          }
      }
    });
}
changePage(id){
 
 //alert(id);
 
}
  

  
  render() {
    
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
       
        <div className="Login">
            <form class="login-form">
                <div>
                
                <ul><input type="text" placeholder="username" onChange={e => this.setState({termUsername: e.target.value})}/></ul>
                <ul><input type="password" placeholder="password" onChange={e => this.setState({termPassword: e.target.value})}/></ul>

                
                <ul id="changeNavigate" ></ul>
                
                <ul><a href="/" onClick={e => this.setState({flag: true})}>verify</a>
                <ul id="changeNavigate"><Link id="changeid" to={{pathname: '/home/' + this.state.id}}>login</Link></ul>
                        


                <li><p class="message">Not registered? <a href="/register">Create an account</a></p></li>
                
                </ul>
                <Greeting isLoggedIn={isLoggedIn} />
             {button}
               
               </div>
            </form>
            
            
        </div>
      
    );
  }
}
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
  
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }
  

export default Login;