import React from 'react';
import Input from './Component/Input';
import {Field, reduxForm} from 'redux-form';
import axios from 'axios';
import {BrowserRouter, Route, Link} from "react-router-dom";
import PageInfo from './Component/PageInfo';
import DeleteInfo from './Component/DeleteInfo';
import Change from './Component/Edit';
import Chart from './Component/Chart';
import Login from './Component/Login';
import Register from './Component/Register';



class App extends React.Component {

    render() {
        return (
            <div>
            <BrowserRouter>
                 <div>
                    
                    <Route path="/" exact component={Login}/>
                    <Route path="/register" exact component={Register}/>
                    <Route path="/home/:id" exact component={Input}/>
                    <Route path="/pageinfo/:id" exact component={PageInfo}/>
                    <Route path="/pageinfo/:id" exact component={Chart}/>
                    <Route path="/:id" exact component={DeleteInfo}/>
                    <Route path="/edit/:id" exact component={Change}/>
                    </div>
                
            </BrowserRouter>
            </div>
        );
    }
};

export default App;
