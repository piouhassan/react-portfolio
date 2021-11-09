import { combineReducers } from 'redux'
import infoReducers from './infoReducers'
import  articleReducers from './articleReducers'
import projectReducers from "./projectReducers";


export default combineReducers({
     info: infoReducers,
     article : articleReducers,
     project : projectReducers
})