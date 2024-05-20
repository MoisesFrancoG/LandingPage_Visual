import Logo from "../atomos/Logo"
import Image from "../atomos/Image"
import Paragraph from "../atomos/Paragraph"
import Text from "../atomos/Text"
import Line from "../atomos/Line"
import logo from "/logo-ford.png"

//Importaciones css
import './css/Index.css'
function Index(props) {
    const parrafos = ["Inicio", "Carros del año", "Mi carro favorito"]
    return(
        <>
        <div id="container">
            <div id="index_container_logo">
                <Logo logo = {logo}></Logo>
            </div>
            <div id="index_container_parrafos">
                {parrafos.map(string => <Paragraph p = {string}></Paragraph>)}
            </div>

            <Image image = {props.image}></Image>

            <div id="index_container_text">
                <Text text = {props.text}></Text>
            </div>
        </div>
        <Line></Line>
        </>
    )
}
export default Index