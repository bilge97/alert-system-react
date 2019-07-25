import React from 'react';
import {Field, reduxForm} from 'redux-form';
import axios from "axios";
import {BrowserRouter, Route, Link} from "react-router-dom";
import Table from "./Table";
import Chart from './Chart';


class Input extends React.Component {

    

    state = {values: [] , valuesLogin:[]};
    state = {termName: '', termUrl: '', termMethod: '', termPeriod: '', termId: '' , pageId:'' };

    constructor(props) {
        super(props);
        const url = window.location.pathname; // u can use regex or whatever to get just the id
        this.state.pageId = url.substring(url.lastIndexOf('/') + 1);
        
      
        
       
    }

    onInputChange(event) {
        // console.log(event.target.value);
    }

    onInputClick(event) {
        //event.target.value = "";
    }

    onFormSubmit = event => {
        event.preventDefault();
        const id = this.props.match.params.id;
    
        const alert = {
            name: this.state.termName,
            url: this.state.termUrl,
            method: this.state.termMethod,
            period: this.state.termPeriod,
            login_id:id
        }

        axios.post('http://localhost:8081/alert', alert ).then((response) => {

            console.log(response.data);
        });

    }
//td yan yana tr altalta

    

    render() {

        return (
          

            <div id="mainDiv">
                <h1 id="header">ALERT SYSTEM</h1>
                <hr></hr><br/>
                <form id="formid" onSubmit={event => this.onFormSubmit(event)}>

                    <div>

                        <ul>
                            <li><label>NAME</label></li>

                            <li><input
                                placeholder='Enter Name'
                                type="text"
                                value={this.state.termName}
                                onClick={this.onInputClick}
                                onChange={e => this.setState({termName: e.target.value})}/>
                            </li>
                        </ul>


                        <ul>
                            <li><label> URL</label></li>

                            <li><input class="form-group col-md-6"
                                       placeholder='Enter URL'
                                       type="url"
                                       value={this.state.termUrl}
                                       onClick={this.onInputClick}
                                       onChange={e => this.setState({termUrl: e.target.value})}
                                       class="form-control"
                            />
                            </li>
                        </ul>

                        <ul>
                            <li><label>METHOD</label></li>
                            <li>
                                <select className="form-control" id="exampleFormControlSelect1"
                                        onChange={e => this.setState({termMethod: e.target.value})}>
                                    <option placeholder= 'choose..'></option>
                                    <option>GET</option>
                                    <option>PUT</option>
                                    <option>POST</option>
                                    <option>DELETE</option>
                                </select>

                            </li>
                        </ul>


                        <ul>
                            <li><label>PERIOD</label></li>
                            <li>
                                <input
                                    placeholder='Enter Period'
                                    type="text"
                                    value={this.state.termPeriod}
                                    onClick={this.onInputClick}
                                    onChange={e => this.setState({termPeriod: e.target.value})}
                                />
                            </li>
                            
                        </ul>

                        <button id='runButton'>   
                            RUN
                        </button>

                        <br/>

                        <Table id={this.state.pageId}/>

                    </div>

                </form>
                
            </div>

        );
    }

}


export default Input;