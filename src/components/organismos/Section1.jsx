import Index from "../moleculas/Index"
import mysql from "../../data/mysql.js"
function Section1 () {
    return(
        <div>
            {mysql.options.map(option =><Index image = {option.image} text = {option.text}></Index>)}
        </div>
        
    )
}
export default Section1