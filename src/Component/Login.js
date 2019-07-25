import React from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Link} from "react-router-dom";


class Login extends React.Component {

    state = {values: [] , resp: [] , valuesAlert:[]};
    state = {termUsername:'' , termPassword:'' , count:0 , flag: false , flagchange:false , id:0}; 

    constructor(props) {
      super(props);
    }

    componentDidMount(){
      axios.get(`http://localhost:8081/alerts`).then((result) => {

            console.log(result);
            let newValues = {valuesAlert: result.data};
            this.setState(newValues);
            
        });
    axios.get(`http://localhost:8081/logins`).then((result) => {

      //console.log(result.data);
      let newValues = {values: result.data};
      this.setState(newValues);
      console.log(this.state.values);
  });
  }

  
changePage(idlogin , valuesAlert){

  //alert(valuesAlert.length);
  var myLink ="/home/"+idlogin;
  window.location.pathname=myLink;
        
     let counter = 0;
     for(counter=0 ; counter<valuesAlert.length ; counter++)
  {

  
    const editLogin = {
      id:valuesAlert[counter].id,
      name:valuesAlert[counter].name,
      url:valuesAlert[counter].url,
      method:valuesAlert[counter].method,
      period:valuesAlert[counter].period
  }
  //alert(editLogin.name);
 

  axios.put(`http://localhost:8081/alert/${editLogin.id}` , editLogin).then((response) =>{
    
    console.log(response.data);
  
  });


 }
 
 
}

handleClick(flag){
  
 
  axios.get(`http://localhost:8081/logins`).then((result) => {
    
    //console.log(result.data);
  let newValues = {values: result.data};
  
  let count = 0;
  
  flag=true;
  this.setState(newValues);
  
  for(count=0 ; count<this.state.values.length ; count++)
  {
    
      if(this.state.values[count].username == this.state.termUsername 
            && this.state.values[count].password == this.state.termPassword
            && flag == true)
      {
        
        this.changePage(this.state.values[count].id , this.state.valuesAlert);
       
       // this.state.flagchange =true;
        this.state.id =this.state.values[count].id;
        
      }
  }
});



}

  handleUserChange(evt) {
    this.setState({ termUsername: evt.target.value });
    
  };

  handlePassChange(evt) {
    this.setState({termPassword: evt.target.value});
  }

  
  

  
  render() {
    

    return (
       
        <div className="Login">
            <form class="login-form">
                <div>
                <ul><input type="text" placeholder="username" onChange={e => this.setState({termUsername: e.target.value})}/></ul>
                <ul><input type="password" placeholder="password" onChange={e => this.setState({termPassword: e.target.value})}/></ul>

                
                <ul id="changeNavigate" ></ul>
                
                <ul><button onClick={this.handleClick(this.state.flag)}><Link to={{pathname: '/home/' + this.state.id}}>Login</Link></button>

                <li><p class="message">Not registered? <a href="/register">Create an account</a></p></li>
                
                </ul>
               
               </div>
            </form>
            
            
        </div>
      
    );
  }
}

export default Login;