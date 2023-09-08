import "./Item.css"

const Item = ({personaje}) => {
    const {id, nombre, edad, rol, escuela, img} = personaje
    return (
    <div key={id} class="cont-info">
        <img 
            src={img} 
            alt={nombre} 
        />
        <h2 class="nombre-personaje">{nombre}</h2>
        <h3>Edad: {edad}</h3>
        <h3>Temple: {rol}</h3>
        <h3>Casa: {escuela}</h3>
    </div>
    )
}

export default Item