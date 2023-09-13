import "./ProductsSection.css"
import { useState, useEffect } from "react";

const ProductsSection = () => {
    // destructing
    const [imagenes, setImagenes] = useState([])

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/images/search?limit=20")
        .then(res => res.json())
        .then(data => setImagenes(data))
    }, [])

    return (
        <section>
            {
                imagenes.map((imagen) => {
                    return (
                        <div key={imagen.id}>
                            <img src={imagen.url} alt="" />
                        </div>
                    )
                })
            }
        </section>
    )
}

export default ProductsSection