import {actionTypes} from '../constant/constant';

const initialState={
    person:'',
    about:'',
    editing:false
}

export default (state=initialState,action)=>{
    switch(action.type){
       
        case actionTypes.ADD:{
            return{
                ...state,
                person:action.payload.person,
                about:action.payload.about 
            }
        }
     
        default: return state;
    }
}