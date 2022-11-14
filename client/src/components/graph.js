import Chart from "react-apexcharts";
import React, {useState} from 'react';

function Graph() {
    const [graphData, setGraphData] = useState(null)
    const SERVER = process.env.REACT_APP_SERVER
    React.useEffect(() => {
        fetch(`${SERVER}/power`)
        .then((res) => res.json())
        .then((data) => {console.log('Fetched Power data Successfully'); setGraphData(data);})
        .catch((error) => {
            console.error('Error:', error);
          });
    }, [])
    const options= {}
    let series = []
    if(graphData != null){
        series = [
            {
                type: "line",
                name: "Cost",
                data: graphData.map(d => d.cost)
            },
            {
                type: "line",
                name: "Day",
                data: graphData.map(d => d.day)
            }
        ];
    }
    return (
        <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={options}
              series={series}
              type="line"
              width="50%"
            />
          </div>
        </div>
      </div>
    )

}
export default Graph