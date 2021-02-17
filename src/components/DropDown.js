import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const dataType = [
    {
        value: 'dates',
        label: 'dates',
    },
    {
        value: 'time',
        label: 'time',
    },

];

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '15ch',
        },
    },
}));

const DropDown = ({onOptionChange, selectedOption}) => {
    const classes = useStyles();


    return (
        <form className={classes.root} noValidate autoComplete="off">

            <div>


                <TextField
                    fullWidth
                    name="option"
                    onChange={(event) => onOptionChange(event.target.value)}
                    select
                    SelectProps={{native: true}}
                    value={selectedOption}
                    variant="outlined"
                >
                    {dataType.map((data) => (<option key={data.value} value={data.value}>{data.value}</option>))}
                </TextField>

            </div>
        </form>
    );
}
export default DropDown