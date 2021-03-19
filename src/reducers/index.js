import {START_SMURF_FETCH, 
        SMURF_FETCH_SUCCESSFUL, 
        SMURF_FETCH_ERROR, 
        ADD_ERROR_VALUE, 
        ADD_NEW_SMURF} from '../actions';

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message
export const initialState = {
    smurfs: [], //this will be array of smurfs
    isLoading: false, 
    errMessage: '' //this will be possible error message
}
//2. Add in the arguments needed to complete a standard reducer function.
export default function reducer (state = initialState, action) {
    switch(action.type) {
//3. Add in a reducer case to accomidate the start of a smurf fetch.
        case START_SMURF_FETCH:
            return {
                ...state,
                isLoading: true
            }
//4. Add in a reducer case to accomidate the successful smurf api fetch.        
        case SMURF_FETCH_SUCCESSFUL:
            return {
                ...state,
                smurfs: action.payload,
                isLoading: false
            }
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
        case SMURF_FETCH_ERROR:
            return {
                ...state,
                errMessage: action.error
            }
//6. Add in a reducer case to accomidate adding a smurf 
///(including the name, nickname, position, summary 
///and an internally generated id) into your smurf list.
        case ADD_NEW_SMURF:
            const addSmurf = state.smurfs.find(
                (smurf) => smurf.id === action.payload
            )

            return {
                ...state,

                smurfs: [...state.smurfs, addSmurf],

                isLoading: state.isLoading,

                errMessage: state.errMessage
            }
//7. Add in a reducer case that adds in a value to the error message.
        case ADD_ERROR_VALUE:
            return {
                ...state,
                errMessage: "ERROR!"
            }



        default:
            return state;
    }
};







