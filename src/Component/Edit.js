import React from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Link} from "react-router-dom";

class Change extends React.Component{

    state={ values:[] };

    constructor(props) {
        super(props);
        this.state = {value: 'Name'};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      componentDidMount() {
        const id = this.props.match.params.id;//id yi aldım
        //console.log(this.props.match.params);

        axios.get(`http://localhost:8081/alert/${id}`).then((result) => {

            console.log(result);
            let newValues = {values: result.data};
            this.setState(newValues);
            //this.setState(respValues);
        

        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const id = this.props.match.params.id;//id yi aldım
        //console.log(this.props.match.params);

        axios.get(`http://localhost:8081/alert/${id}`).then((result) => {

            console.log(result);
            let newValues = {values: result.data};
            this.setState(newValues);
            
        });
    }


      handleChange(event) {
        this.setState({value: event.target.value});
      }


      handleSubmit(event) {
        const typeOfChoose = this.state.value;
        var inp = document.createElement("input");
        inp.setAttribute("type", "text");
        inp.setAttribute("id", "inpId");
        inp.setAttribute("placeholder" , "Edit "+typeOfChoose+" and Click Enter..");
        
        
        document.getElementById('fieldsId').appendChild(inp);
        
        
        var nameForFunction = this.state.values.name;
        var urlForFunction = this.state.values.url;
        var methodForFunction=this.state.values.method;
        var periodForFunction=this.state.values.period;
        var long_idForFunction= this.state.values.long_id;
        const id=this.props.match.params.id;
        

        window.onkeypress = function(e){
             const alertName ={
                 name:document.getElementById('inpId').value,
                 url: urlForFunction,
                 method: methodForFunction,
                 period: periodForFunction,
                 long_id: long_idForFunction
             } 
             const alertUrl ={
                name: nameForFunction,
                url: document.getElementById('inpId').value,
                method: methodForFunction,
                period: periodForFunction,
                long_id: long_idForFunction
            } 
            const alertMethod ={
                name:nameForFunction,
                url: urlForFunction,
                method: document.getElementById('inpId').value,
                period: periodForFunction,
                long_id: long_idForFunction
            } 
            const alertPeriod ={
                name: nameForFunction,
                url: urlForFunction,
                method: methodForFunction,
                period: document.getElementById('inpId').value,
                long_id: long_idForFunction
            } 

            if(e.keyCode==13 && typeOfChoose=="Name" ){
                axios.put(`http://localhost:8081/alert/${id}`, alertName).then((response) => {
                 console.log(response.data);
                });
                alert(typeOfChoose+" edited from "+nameForFunction+" to "+document.getElementById('inpId').value);
                document.getElementById('inpId').remove();
            }

            if(e.keyCode==13 && typeOfChoose=="Url" ){
                axios.put(`http://localhost:8081/alert/${id}`, alertUrl).then((response) => {
                 console.log(response.data);
                });

                alert(typeOfChoose+" edited from "+urlForFunction+" to "+document.getElementById('inpId').value);
                document.getElementById('inpId').remove();
            }

            if(e.keyCode==13 && typeOfChoose=="Method" ){
                axios.put(`http://localhost:8081/alert/${id}`, alertMethod).then((response) => {
                 console.log(response.data);
                });

                alert(typeOfChoose+" edited from "+methodForFunction+" to "+document.getElementById('inpId').value);
                document.getElementById('inpId').remove();
            }

            if(e.keyCode==13 && typeOfChoose=="Period" ){
                axios.put(`http://localhost:8081/alert/${id}`, alertPeriod).then((response) => {
                 console.log(response.data);
                });

                alert(typeOfChoose+" edited from "+periodForFunction+" to "+document.getElementById('inpId').value);
                document.getElementById('inpId').remove();
            }
                
        }
        event.preventDefault();
      }


    

    render(){

        return(
        <div id= "mainDiv">    
        <form onSubmit={this.handleSubmit}>
        <h1>EDIT</h1>
        <fieldset className="fields" id="fieldsId">
            
            <h3 className="labelname">
                Select attribute:
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="Name">Name</option>
                    <option value="Url">Url</option>
                    <option value="Method">Method</option>
                    <option value="Period">Period</option>
                </select>
            </h3>
                
        <input id="chooseId" type="submit" value="Edit" />
        </fieldset>
        </form>
        </div>
        )
    }

};

export default Change;