import {ADD_RECIPE} from '../actionTypes';


export const addRecipe = (data) => {
    return{
        type:ADD_RECIPE,
        payload: {data}
    }
}
    