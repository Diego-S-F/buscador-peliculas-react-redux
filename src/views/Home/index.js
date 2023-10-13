import { useState } from 'react'
import cine from '../../assets/chemscine.png'
import { useNavigate } from 'react-router-dom'
export const Home = () => {
    const  navigate=useNavigate()
    const [search, setSearch] = useState('')

    const handleInputChange=({target : {value}})=>{
        setSearch(value);
    }
    const handleCleanClick = ()=>{
        setSearch('')
    }
    const handleSearchClicik = ()=>{
        navigate(`/results/${search.trim()}`)
    }
    return(
        <div className='flex h-screen overflow-hidden'>
            <div className='w-2/5 '>
                <img  src={cine} alt='chemscine'className='w-full h-full object-cover'></img>
            </div>

            <div className='w-3/5 flex justify-center items-center flex-col px-10 '>
                <h2 className="text-3xl text-gray-700 font-bold font-lato">Busca tu pelicula ... </h2>
                <input className='bg-gray-300 w-full font-lato my-3 h-7 p-2 border focus:outline-none 
                focus:ring-2 focus:ring-orange-500 rounded
                '
                value={search}
                onChange={handleInputChange}
                />
                <div className='flex w-full justify-between'>
                    <button className='bg-orange-400 hover:bg-orange-600 text-gray-50 
                    font-lato w-full shadow-lg h-8'
                    style={{width: "40%"}}
                    onClick={handleSearchClicik}
                    >Buscar</button>
                    <button
                    className='bg-green-500 hover:bg-green-700 text-gray-50 
                    font-lato w-full shadow-lg h-8'
                    style={{width: "40%"}}
                    onClick={handleCleanClick}
                    >Limpiar</button>
                </div>
            </div>
        </div>
    )
}
export default Home