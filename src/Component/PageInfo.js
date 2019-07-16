import React from 'react';
import axios from "axios";
import {BrowserRouter, Link} from "react-router-dom";


class PageInfo extends React.Component {

    state = {
        values: [], resp: []
    };


    componentDidMount() {
        const id = this.props.match.params.id;//id yi aldım
        //console.log(this.props.match.params);

        axios.get(`http://localhost:8081/alert/${id}`).then((result) => {

            console.log(result);
            let newValues = {values: result.data};
            this.setState(newValues);
            //this.setState(respValues);
            let mp = result.data.response.map(item => {
                if (item.responsecode == 200) return 1; else return 0;
            });//arraydi o yüzden yaptım
            this.setState({resp: mp});
            console.log(mp);

        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const id = this.props.match.params.id;//id yi aldım
        //console.log(this.props.match.params);

        axios.get(`http://localhost:8081/alert/${id}`).then((result) => {

            console.log(result);
            let newValues = {values: result.data};
            this.setState(newValues);
            let mp = result.data.response.map(item => {
                if (item.responsecode == 200) return 1; else return 0;
            });//arraydi o yüzden yaptım
            this.setState({resp: mp});
            console.log(mp);

        });
    }


    render() {
        return (
            <div id="infoid">
                    <ul>
                        <li>{this.state.values.name}</li>
                        <li>{this.state.values.url}</li>
                        <li>{this.state.values.method}</li>
                        <li>{this.state.values.period}</li>
                        <li>{this.state.resp}</li>

                    </ul>
                   

            </div>
        );

    }

};

export default PageInfo;