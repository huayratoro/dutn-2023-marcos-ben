import "./Main.css"
import imgDiv from "/home/marcos/Documentos/dutn-2023-marcos-ben/tps/react-tp-1/src/assets/img/img-div.png"
import imgIntro from "/home/marcos/Documentos/dutn-2023-marcos-ben/tps/react-tp-1/src/assets/img/img-intro.png"

const Main = () => {
    return (
        <main>
            <section class="seccion-imagen">
            <div class="cont-img">
                <img src={imgDiv} alt=""/>
            </div>
            </section>
            <section class="cont-intro">
                <div class="cont-titulo">
                    <h1>Presentamos AgroSat</h1>
                </div>
                <h2>¿Qué hacemos?</h2>
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
            <hr />
            <section class="cont-formulario">
                <h2>Contáctenos</h2>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Ingrese su correo: </label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nombre@ejemplo.com"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Ingrese su consulta: </label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>                
            </section>
        </main>
    )
}

export default Main