import axios from 'axios';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';


export const START_SMURF_FETCH = "START_SMURF_FETCH";
export const SMURF_FETCH_SUCCESSFUL = "SMURF_FETCH_SUCCESSFUL";
export const SMURF_FETCH_ERROR = "SMURF_FETCH_ERROR";
export const ADD_ERROR_VALUE = "ADD_ERROR_VALUE";
export const ADD_NEW_SMURF = "ADD_NEW_SMURF";

const middelewares = [thunk];

//Task List:
//1. Add a thunk action called fetchSmurfs that 
///triggers a loading status display in our application, 
///performs an axios call to retreive smurfs from our server, 
///saves the result of that call to our state 
///and shows an error if one is made.
export const fetchSmurfs = () => {

    return (dispatch) => {
        dispatch({type: START_SMURF_FETCH});

        axios.get("http://localhost:3000/smurfs")
            .then((res) => {
                dispatch({type: SMURF_FETCH_SUCCESSFUL, payload: res.data.smurfs});
            })
            .catch((err) => {
                dispatch({type: SMURF_FETCH_ERROR, payload: err.message});
            });
      
    }

}

//2. Add a standard action that allows us to 
///add new smurf (including the name, nickname, position, summary)
export const addNewSmurf = (id) => {
    return ({type:ADD_NEW_SMURF, payload: id});
}



//3. Add a standard action that allows us to 
//set the value of the error message slice of state.
export const addError = () => {
    return ({ type:ADD_ERROR_VALUE})
}