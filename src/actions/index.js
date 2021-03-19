import axios from 'axios';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';

const middelewares = [thunk];

//Task List:
//1. Add a thunk action called fetchSmurfs that 
///triggers a loading status display in our application, 
///performs an axios call to retreive smurfs from our server, 
///saves the result of that call to our state 
///and shows an error if one is made.
function fetchSmurfs() {

    return function() {

    }
}

createStore(applyMiddleware(...middelewares));

//2. Add a standard action that allows us to 
///add new smurf (including the name, nickname, position, summary)




//3. Add a standard action that allows us to 
//set the value of the error message slice of state.