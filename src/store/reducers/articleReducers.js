import {GET_ARTICLE} from '../types'

const initialState = {
    article:[],
    loading:true
}

const articleReducers = (state = initialState, action) =>{

    switch(action.type){

        case GET_ARTICLE:
            return {
                ...state,
                article:action.payload,
                loading:false

            }
        default: return state
    }

}

export  default articleReducers