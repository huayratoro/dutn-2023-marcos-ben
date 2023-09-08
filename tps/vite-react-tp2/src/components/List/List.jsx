import Item from "../Item/Item"
import nombres from "../../services/db"

const List = () => {
    return (
        <>
            {/*<h1>{nombres[0]}</h1>*/}
            {
                nombres.map((nombre)=>{
                    return (
                        // <h1 key={nombre}> {nombre} </h1>
                        <Item key={nombre} nombre={nombre}/>
                    )
                })
            }
        </>
    )
}

export default List