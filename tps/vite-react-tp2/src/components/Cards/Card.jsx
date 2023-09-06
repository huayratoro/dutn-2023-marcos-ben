import "./Card.css"

const Card = ({img, nameC, name, origen}) => {
    return(
        <div class='cont-carta'>
            <img 
                src={img} 
                alt="" 
            />
            <h2>Nombre científico: {nameC}</h2>
            <p>Nombre común: {name}</p>
            <p>Origen: {origen}</p>
        </div>
    )
}

export default Card