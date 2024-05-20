import Title3 from "../atomos/TitleSection3"
import Descriptive from "../atomos/DescriptiveText"
import Car from "../atomos/Car"
import Specifications from "../atomos/Specifications"
import './css/FavoriteCar.css'
function Favorite() {
    return(
        <>
            <div id="container_title">
                <Title3></Title3>
            </div>
        <div id="container_favorite">
            <div id="container_text">
                <Descriptive></Descriptive>
            </div>
            <div id="container_image">
                <Car></Car>
            </div>
            <div id="container_specifications">
                <Specifications></Specifications>
            </div>
        </div>
        </>
    )
}

export default Favorite