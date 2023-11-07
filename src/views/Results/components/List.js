import ListItem from "./ListItem"
export const List = ({data, onListItem})=>{
    return(
        data?.results.map((movie)=>(
            <ListItem key={movie.id} {...movie} onListItemClick={onListItem}/>
        ))
    )
}
export default List