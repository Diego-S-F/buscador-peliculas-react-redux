export const Laoding = () => {
    return(
        <div className="flex items-center justify-center flex-col h-full">
            <div
            style={{borderTopColor: 'transparent'}} 
            className="w-16 h-16 border-4 border-blue-900 border-solid rounded-full animate-spin"/>
            <p>Cargando peliculas ...</p>
        </div>
    )
}

export default Laoding