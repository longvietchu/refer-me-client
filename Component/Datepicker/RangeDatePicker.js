import  React,{useState} from "react";
import { DateRange } from 'react-date-range';
import {Button,Card,Grid,Divider} from "@material-ui/core";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
const RangeDatepicker=(props)=>{
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);
    const changeDate=(item)=>{
        console.log(item.selection)
        setState([item.selection])

    }
    const onClickButton=()=>{
        if(state[0].startDate && state[0].endDate)
        {
            props.onChangeDate(state[0].startDate,state[0].endDate)
        }
        props.handleClick()
    }
    return(
        <Card   >
            <Grid  container direction={'column'} >
                <Grid  item>
                    <DateRange
                        dateDisplayFormat={'dd/MM/yyyy'}
                        editableDateInputs={true}
                        onChange={item => changeDate(item)}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                    />
                </Grid>
                <Divider />
                <Grid  item>
                    <Grid container direction={'row'}    justify={'flex-end'}    >

                        <Grid  item>
                            <Button   onClick={onClickButton}  color="primary">
                                OK
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>


            </Grid>

        </Card>


    )
}

export  default  RangeDatepicker
