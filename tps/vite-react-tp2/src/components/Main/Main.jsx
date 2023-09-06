import "./Main.css"
import Card from "../Cards/Card"

const Main = () => {
    return (
        <main>
            <section>
                <Card 
                    img="https://www.ecoregistros.org/site/images/dataimages/2019/08/25/347103/PicsArt_08-25-10.03.28-1024x684.jpg" 
                    nameC="Xolmis irupero" 
                    name="Monjita blanca" 
                    origen="Salta"
                />
                <Card 
                    img="https://mymodernmet.com/wp/wp-content/uploads/2020/07/Andean-Condor-Flying-6-1.jpg" 
                    nameC="Vultur gryphus" 
                    name="Condor andino" 
                    origen="La Rioja"
                />
                <Card 
                    img="https://inaturalist-open-data.s3.amazonaws.com/photos/1766279/original.jpg" 
                    nameC="Pitangus sulphuratus" 
                    name="Benteveo común" 
                    origen="Córdoba"
                />
                <Card 
                    img="https://www.ecoregistros.org/site/images/dataimages/2021/08/01/455465/Loica-Comun--Leistes-loyca-.jpg" 
                    nameC="Leistes loyca" 
                    name="Loica común" 
                    origen="Mendoza"
                />
                <Card 
                    img="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/116096251/1800" 
                    nameC="Mimus saturninus" 
                    name="Calandria comun" 
                    origen="Buenos Aires"
                />
                <Card 
                    img="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/88527851/1800" 
                    nameC="Cariamidae sp." 
                    name="Chu{a patas rojas" 
                    origen="Chaco"
                />
                <Card 
                    img="https://upload.wikimedia.org/wikipedia/commons/8/88/Trogon_surrucura_brazil.jpg" 
                    nameC="Trogon surucua" 
                    name="Surucuá" 
                    origen="Jujuy"
                />
            </section>
        </main>
    )
}

export default Main