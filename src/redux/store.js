import { applyMiddleware, createStore } from "redux"; 
import thunk from 'redux-thunk';
import { initState } from "./initState";
import rootReducer from "./reducers/rootReducer";



 export default createStore (
     rootReducer,
     initState(),
     applyMiddleware(thunk),
 )