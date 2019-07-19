import React, {Component} from 'react';
import {CanvasJSChart , CanvasJS} from "./canvasjs.react";
import axios from "axios";
import Time from 'react-time';
let now = new Date().toLocaleTimeString();
var dps = [{x:0 , y:0}];   //dataPoints.
var xVal = dps.length + 1;
var yVal = 15;
var updateInterval = 1000;

class Chart extends Component {

    constructor() {
        super();
        this.updateChart = this.updateChart.bind(this);
    }

    state = {
        values: [], resp: []
    };
   
    componentDidMount() {
        setInterval(this.updateChart, updateInterval);
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

            let newValues = {values: result.data};
            this.setState(newValues);
            let mp = result.data.response.map(item => {
                if (item.responsecode == 200) return 1; else return 0; 
            });//arraydi o yüzden yaptım
            this.setState({resp: mp});
    
        });
    }

    updateChart() {
        var i = this.state.resp.length;
        yVal =this.state.resp[i-1];//son 10 tane göster
        dps.push({x: xVal,y: yVal});
        xVal=xVal+this.state.values.period;

        if (dps.length >  10 ) {

            dps.shift();
        }
        
         this.chart.render();
    }

    render() {
        const options = {
            title :{
                text: "Dynamic Line Chart"
            },
            data: [{
                type: "line",
                dataPoints : dps
            }]
        }
        return (
            <div>
                <CanvasJSChart  options = {options}
                               onRef={ref => this.chart = ref}//???
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}

export default Chart;