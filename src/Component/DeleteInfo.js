import React from 'react';
import axios from "axios";
import {BrowserRouter, Link} from "react-router-dom";
import Table from "./Table";
import Input from "./Input";


class PageInfo extends React.Component {

    state = {
        values: []
    };

    componentDidMount() {
        const id = this.props.match.params.id;//id yi aldım
        //console.log(this.props.match.params);
        axios.delete(`http://localhost:8081/alert/${id}`).then((result) => {
            //  console.log(result.data);
            let newValues = {values: result.data};
            this.setState(newValues);

        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const id = this.props.match.params.id;//id yi aldım
        //console.log(this.props.match.params);
        axios.delete(`http://localhost:8081/alert/${id}`).then((result) => {
            //  console.log(result.data);
            let newValues = {values: result.data};
            this.setState(newValues);

        });
    }

    render() {
        return (
            <div>
                <Input/>
            </div>
        );

    }

};

export default PageInfo;