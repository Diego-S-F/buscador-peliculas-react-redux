import { createAction } from "@reduxjs/toolkit";

const BASE_URL = 'https://imdb8.p.rapidapi.com';

const headers = {
    'X-RapidAPI-Key': '7ddcf039e0mshd628212022248e7p184231jsn03e993b7c696', 
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
}




export const startFetchMovieRatings = createAction('START_FETCH_MOVIE_RATINGS');
export const succesFetchMovieRatings = createAction('SUCCES_FETCH_MOVIE_RATINGS');
export const errorFetchMovieRatings = createAction('ERROR_FETCH_MOVIE_RATINGS');

export const fetchMovieRatings = (idMovie) => async (dispatch) =>{
    try{
        dispatch(startFetchMovieRatings());
        const response = await fetch(`${BASE_URL}/title/get-ratings?tconst=${idMovie}`, {headers});
        const data = await response.json();
        console.log(data)
        //dispatch(succesFetchMovieRatings({data}))

    } catch(error){
        dispatch(errorFetchMovieRatings({error}))
    }
}