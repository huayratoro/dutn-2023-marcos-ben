import "./Main.css"
import imgDiv from "/home/marcos/Documentos/dutn-2023-marcos-ben/tps/react-tp-1/src/assets/img/img-div.png"

const Main = () => {
    return (
        <main>
            <section class="seccion-imagen">
            <div class="cont-img">
                <img src={imgDiv} alt=""/>
            </div>
            </section>
            <section class="cont-intro">
                <h1>Presentamos AgroSat</h1>
                <h2>¡Del espacio a tu lote!</h2>
                <div class="columnas">
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam mollitia, voluptates labore explicabo debitis, quidem consequatur iste facere officia obcaecati temporibus necessitatibus maiores rem, sit quam vel possimus veniam odit?</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam mollitia, voluptates labore explicabo debitis, quidem consequatur iste facere officia obcaecati temporibus necessitatibus maiores rem, sit quam vel possimus veniam odit?</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam mollitia, voluptates labore explicabo debitis, quidem consequatur iste facere officia obcaecati temporibus necessitatibus maiores rem, sit quam vel possimus veniam odit?</p>
                    </div>
                </div>
            </section>
            <section class="cont-mapa">
                <h2>¿Dónde nos ubicamos?</h2>
                {/* MAPA */}
            </section>
        </main>
    )
}

export default Main