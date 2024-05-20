import Cars from "../moleculas/Cars"
import mysql from "../../data/mysql"
import Title from "../moleculas/Title"
import './Sec2.css'
function Section2() {
    return(
        <div id="container_section">
            <Title></Title>
            <div id="container_cars">
                {mysql.cars.map(value => <Cars img = {value.img} name = {value.name}></Cars>)}
            </div>
        </div> 
    )
}
export default Section2