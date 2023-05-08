import './CampText.css';

const CampoText = (props) => { // passando as props necessárias
    const placeHolderDoCampo = `${props.placeholder}...`
    
    return (
        <div className="campo-text">
            <label>{props.label}</label>
            <input placeholder={placeHolderDoCampo}/>
        </div>
    ) 
}

export default CampoText