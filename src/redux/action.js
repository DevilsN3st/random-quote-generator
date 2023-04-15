
import axios from "axios";
import {
    START_LOADING,
    END_LOADING,
    GET_QUOTE,
    BOOKMARK_THE_QUOTE,
    REMOVE_THE_BOOKMARK
} from './actiontypes';


export const getQuote = () => async(dispatch) => {

    try{
        dispatch({type: START_LOADING});
        console.log("hi");
        
        const res = await axios.get('https://api.quotable.io/random');
        const payload = res.data;

        dispatch({type: GET_QUOTE, payload: payload});

        dispatch({type: END_LOADING});
    }
    catch(err){
        console.log(err);
    }

}
export const getQuoteByTags = (tag) => async(dispatch) => {

    try{
        dispatch({type: START_LOADING});
        
        const res = await axios.get(`https://api.quotable.io/random/?tags=${tag}`);
        const payload = res.data;

        dispatch({type: GET_QUOTE, payload: payload});

        dispatch({type: END_LOADING});
    }
    catch(err){
        console.log(err);
    }

}

export const addToBookmark = ( quote ) => ( dispatch ) => {

    try{
        dispatch({ type: BOOKMARK_THE_QUOTE, payload: quote });
    }
    catch(err){
        console.log(err);
    }
}
export const removeFromBookmark = ( id ) => ( dispatch ) => {
    console.log(id);
    try{
        dispatch({ type: REMOVE_THE_BOOKMARK, payload: id });
    }
    catch(err){
        console.log(err);
    }
}
