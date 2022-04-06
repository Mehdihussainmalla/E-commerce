import React from 'react';
import StringsPass from '../Actions/StringsPass';
const Initial_State=false
const Continue=(state=Initial_State,action)=>{
    switch (action.type) {
        case StringsPass.LOGIN:
            return state=true
    
        default:
            return state
    }
}
export default Continue