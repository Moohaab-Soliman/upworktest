import React, {useState, useEffect, useRef} from 'react'
import Chart from "chart.js";
import {date, time} from "../data/LinearData";
import DropDown from "./DropDown";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',

    },
}));


const LinearChart = () => {
    const classes = useStyles();

    const [selectedOption, setSelectedOption] = useState('dates')

    const chartRef = useRef();
    const dataArray = [100, 500, 400, 200, 700]
    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: selectedOption === 'dates' ? date : time,
                datasets: [
                    {
                        fill: false,
                        label: "Flow dropout per step and service",
                        data: dataArray,
                        borderColor: 'rgb(99,250,255)',
                        backgroundColor: ''
                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    }, [selectedOption])


    const signUps = dataArray.reduce((total, index) => total + index, 0);
    return (
        <Grid container justify='center' className={classes.root}>
            <Grid item style={{color: 'black'}}>
                <h4>{signUps}</h4>
                <h5>Sign-Ups Completed</h5>
            </Grid>
            <Grid item xs={2}/>
            <Grid item>

                <DropDown onOptionChange={setSelectedOption} selectedOption={selectedOption}/>
                < canvas id="chart-Test" width='500' ref={chartRef}/>
            </Grid>
        </Grid>


    )

}
export default LinearChart