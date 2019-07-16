import React from "react";
import axios from "axios";
import {BrowserRouter, Route, Link} from "react-router-dom";


class Table extends React.Component {

    state = {
        values: []
    };

    componentDidMount() {


        axios.get("http://localhost:8081/alerts").then((result) => {
            console.log(result.data)
            let newValues = {values: result.data};
            this.setState(newValues);
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        axios.get("http://localhost:8081/alerts").then((result) => {
            console.log(result.data)
            let newValues = {values: result.data};
            this.setState(newValues);
        });

    }

    render() {
        let ValueComponentsMap = this.state.values.map((ValueInfo, ValueIndex) => {
            return (

                <tr key={ValueIndex}>
                    <td id="tdName">{ValueInfo.name}</td>
                    <td id="tdUrl">{ValueInfo.url}</td>
                    <td id="tdMethod">{ValueInfo.method}</td>
                    <td id="tdPeriod">{ValueInfo.period}</td>

                        <ul id="infoNavigate"><Link id="infoid" to={{pathname: '/pageinfo/' + ValueInfo.id}}>info</Link></ul>
                        <ul id="deleteNavigate"><Link id="deleteid" to={{pathname: '/' + ValueInfo.id}}>delete</Link></ul>

                </tr>

            );
        });

        let valueListTable = (

            <table id="myTable" border="1">

                <thead>
                <tr>
                    <th id="firstrow">Name</th>
                    <th id="firstrow">Url</th>
                    <th id="firstrow">Method</th>
                    <th id="firstrow">Period</th>
                </tr>
                </thead>

                <tbody>
                    {ValueComponentsMap}
                </tbody>
            </table>
        );

        return (
            <div>
                {valueListTable}
            </div>
        );
    }


}


export default Table;