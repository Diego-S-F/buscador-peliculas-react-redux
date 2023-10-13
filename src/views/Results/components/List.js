export const List = ({data})=>{
    return(
        data?.results.map((movie)=>(
            <div className="flex flex-row w-full mt-16" style={{minWidth: 650}} key={movie.id}>
                <div className="w-1/6 ">
                    <img src={movie?.image?.url} alt={movie?.title || 'Sin titulo'}
                    className="w-32"
                    />
                </div>
                <div className={"w-5/6 flex flex-col items-start py-1 px-4"}>
                    <p className="font-lato text-3xl">
                        {movie?.title || 'Sin titulo'}
                    </p>
                    <div className="flex h-full items-end">
                        <button
                        className="border-2 border-red-400 rounded-md
                        w-48 h-10 text-xl text-red-400 hover:bg-red-400 hover:text-white
                        "
                        >Ver más</button>
                    </div>
                </div>
            </div>
        ))
    )
}
export default List