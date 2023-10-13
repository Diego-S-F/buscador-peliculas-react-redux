import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const headers = {
    'X-RapidAPI-Key': '7ddcf039e0mshd628212022248e7p184231jsn03e993b7c696',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
}
export const movies = createApi({
    reducerPath: 'movies',
    baseQuery: fetchBaseQuery({baseUrl: 'https://imdb8.p.rapidapi.com'}),
    endpoints: (builder) => ({
        fetchMovies: builder.query({
            query: (title) => ({
                url: `/title/find?q=${title}`,
                method: 'GET', 
                headers,
            })
        })
    })
});
export const  { useFetchMoviesQuery } = movies