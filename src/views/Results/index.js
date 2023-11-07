import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import movieImage from '../../assets/chemscine-watch.png'
import { useFetchMoviesQuery } from "../../redux/api/movies"
import Laoding from "./components/loading"
import List from "./components/List" 

export const Results = () =>  {
    const {title} = useParams()
    const  {data: movies, isLoading, isSuccess, isFetching, error} = useFetchMoviesQuery(title)
    const  navigate = useNavigate()

    const handleListItemClick = (idMovie)=>{
        navigate(`/detail/${idMovie}`)
    }

    const renderContent = ()=>{
        if (error)
            return (
                <div className="flex items-center justify-center h-full">
                    <p className="text-xl">{error.error}</p>
                </div>
            );
        else if(isLoading || isFetching )
            return <Laoding />;
        else if(isSuccess  && movies.results)
            return <List data={movies} onListItem={handleListItemClick}/>;
    }

    return(
        <div className="flex flex-row">
            <div className="w-3/5 h-screen overflow-y-auto px-10">
                {renderContent()}
            </div>
            <div className="w-2/5">
                <img src={movieImage} atl="movies" className="w-full h-screen object-cover"></img>
            </div>
        </div>
    )
}
export default Results