import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { useEffect, useContext } from "react";
import "./comp.css";
import moment from "moment";
import ReactApexChart from 'react-apexcharts'

function WeightGraph(props) {
    console.log(props)
    const state = {

        series: [
            {
                data: props.weight
            },

        ],
        options: {
            chart: {
                height: 350,
                type: 'line',
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                },
                toolbar: {
                    show: false
                }
            },
            colors: ['#77B6EA', '#545454'],
            dataLabels: {
                enabled: true,
            },
            stroke: {
                curve: 'smooth'
            },
            title: {
                // text: 'Average High & Low Temperature',
                align: 'left'
            },
            grid: {
                borderColor: '#e7e7e7',
                row: {
                    // colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                    opacity: 0.5
                },
            },
            markers: {
                size: 1
            },
            xaxis: {
                categories: props.dates,
                title: {
                    // text: 'Month'
                }
            },
            yaxis: {
                title: {
                },

            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
            }
        },


    };



    return (
        <div className="weight-graph">
            <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
        </div>
    );
}

export default WeightGraph;

