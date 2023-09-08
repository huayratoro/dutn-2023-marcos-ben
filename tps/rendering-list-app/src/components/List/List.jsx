import personajesDeHarryPotter from "../../services/harry-potter-db"
import Item from "../Item/Item"

const List = () => {
    return (
        <>
        {
            personajesDeHarryPotter.map((personaje) => {
                return (
                    <Item key={personaje} personaje={personaje}/>
                )
            })
        }
        </>
    )
}

export default List