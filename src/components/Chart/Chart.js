import React, {useState, useEffect} from "react";
import {Line, Bar} from "react-chartjs-2";
import {MDBContainer} from "mdbreact";

import './Chart.css';
import {fetchDailyData} from "../../api";

const colorTotal = '#dc3545';
const colorActive = '#ffc107';
const colorRecovered = '#28a745';
const colorDeaths = '#6c757d';
const colorFont = '#6c757d';

const Chart = (props) => {

    const chartOptions = {
        responsive: true,
        legend: false,
        scales: {
            xAxes: [{
                width: 2,
                ticks: {
                    beginAtZero: false,
                    autoSkip: true,
                    maxRotation: 0,
                    fontSize: '9'
                },
                pointLabels: {
                    fontSize: '9'
                },
                gridLines: {
                    display: false
                }
            }],
            yAxes: [{
                display: false,
                position: 'right',
                ticks: {
                    autoSkip: true
                },
                gridLines: {
                    position: 'right',
                    zeroLineWidth: 0,
                }
            }
            ]
        }
    };

    const lineChart = (
        props.dailyData[0] ? (
            <Line data={{
                //map that returns array of all dates. (Destructured data)
                labels: props.dailyData.map(({date}) => date),
                datasets: [
                    {
                        label: 'Total cases',
                        data: props.dailyData.map((data) => data.total_cases),
                        borderColor: colorTotal,
                        backgroundColor: colorTotal,
                        borderWidth: 2,
                        pointRadius: .1,
                        pointHitRadius: 4,
                        pointHoverRadius: 4,
                        pointBorderWidth: 1,
                        order: 3,
                        fill: true
                    },
                    {
                        label: "Recovered",
                        data: props.dailyData.map((data) => data.recovered),
                        borderColor: colorRecovered,
                        backgroundColor: colorRecovered,
                        borderWidth: 2,
                        pointRadius: .1,
                        pointHitRadius: 4,
                        pointHoverRadius: 4,
                        pointBorderWidth: 1,
                        order: 1,
                        fill: true
                    },
                    {
                        label: "Deaths",
                        data: props.dailyData.map((data) => data.deaths),
                        borderColor: colorDeaths,
                        backgroundColor: colorDeaths,
                        borderWidth: 2,
                        pointRadius: .1,
                        pointHitRadius: 4,
                        pointHoverRadius: 4,
                        pointBorderWidth: 1,
                        order: 0,
                        fill: true
                    },
                    {
                        label: "Active Cases",
                        data: props.dailyData.map((data) => data.active_cases),
                        borderColor: colorActive,
                        backgroundColor: colorActive,
                        borderWidth: 2,
                        pointRadius: .1,
                        pointHitRadius: 4,
                        pointHoverRadius: 4,
                        pointBorderWidth: 1,
                        order: 2,
                        fill: true
                    },
                ]
            }} options={chartOptions}/>
        ) : null
    );


    return (
        <div className="chartContainer">
            {console.log(props.dailyData[0] ? props.dailyData.slice(-1)[0] : "")}
            {lineChart}
        </div>
    )
};

export default Chart;