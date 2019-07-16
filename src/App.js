import React from 'react';
import Input from './Component/Input';
import {Field, reduxForm} from 'redux-form';
import axios from 'axios';
import {BrowserRouter, Route, Link} from "react-router-dom";
import PageInfo from './Component/PageInfo';
import DeleteInfo from './Component/DeleteInfo';
import Chart from './Component/Chart';


class App extends React.Component {




    

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={Input}/>
                    <Route path="/pageinfo/:id" exact component={PageInfo}/>
                    <Route path="/pageinfo/:id" exact component={Chart}/>
                    <Route path="/:id" exact component={DeleteInfo}/>

                </div>
            </BrowserRouter>
        );
    }
};

export default App;
