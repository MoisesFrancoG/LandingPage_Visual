import './css/Paragraph.css'
function Paragraph(props) {
    return(
        <>
        <div id='paragraph_container'>
            <p>{props.p}</p>
        </div>
        </>
)
}

export default Paragraph