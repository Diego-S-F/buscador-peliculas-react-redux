import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from 'react-router-dom'
import { fetchMovieRatings } from "../../redux/actions"

export const Detail = () => {
    const {idMovie} = useParams();
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(fetchMovieRatings(idMovie));
    }, [dispatch, idMovie])

    return( <div>Vista Detalles</div>)
}
export default Detail