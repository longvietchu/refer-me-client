import  React,{Fragment} from 'react';
import AppBar from './../Component/AppBar/Appbar'


const WrapView=(props)=>{

    return(
        <Fragment>
            <AppBar/>
            {props.children}
        </Fragment>

    )
}


export  default  WrapView;
