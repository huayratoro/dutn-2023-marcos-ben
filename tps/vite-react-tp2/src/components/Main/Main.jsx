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
            </section>
        </main>
    )
}

export default Main