import { v4 as uuid } from 'uuid';

const initialState = {
    list: [],
}


const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type){
        case "ADD":
            return {
                ...state,
                list: [...state.list, payload],

            }
        default:
            return{
                ...state,
            }
    }
}


export default userReducer;