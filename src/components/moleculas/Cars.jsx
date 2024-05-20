import Text from "../atomos/Text"
import Images from "../atomos/Images"
import './css/Cars.css'
function Cars(props) {
    return (
            <div id="cars_box">
            <div>
                <Images image = {props.img}></Images>
                <div id="texts">
                    <Text text = {props.name}></Text>
                </div>
            </div>
            </div>
    )
}
export default Cars