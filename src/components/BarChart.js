import react from 'react'
import {Box} from "@material-ui/core";
import ChartData from "../data/ChartData";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import uuid from 'react-uuid'

const getChartData = ChartData


let data = []

for (let i in getChartData) {
    data.push(getChartData[i])
}


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        marginLeft:theme.spacing(2)

    },


    box: {
        width: "60px",
        margin: theme.spacing(1),
        borderRadius: 15,
        padding: theme.spacing(2),
    }
}));

const BarChart = (props) => {
    const classes = useStyles();

    return (
        <div className="scrollMenu">
            <Grid container wrap='nowrap' className={classes.root}
                  alignItems="center"
            >

                {data.map((c ) => (

                    <react.Fragment key={uuid()}>

                        <Grid item>
                            <Box className={classes.box} height={c.value * 3 + 'px'}
                                 style={{backgroundColor: c.type === "BASIC" ? 'lightblue' : 'lightgreen'}}>
                                <p style={{
                                    transform: 'rotate(-90deg)',
                                    position: 'relative',
                                    color: 'black'
                                }}>{c.label}</p>
                            </Box>
                            <p style={{position: 'static', bottom: 0, color: 'black'}}>
                                {c.value + '%'}
                            </p>
                        </Grid>


                    </react.Fragment>
                ))}


            </Grid>


        </div>
    )
}

export default BarChart