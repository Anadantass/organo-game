import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return(
        <div className="ListaSuspensa">
            <label>{props.label}</label>
            <select oncChange={evento => props.aoAlterado(evento.target.vvalue)} required={props.obrigatorio} value={props.value}>
                {props.itens.map(item => {
                    return <option key={item} placeholder = {props.placeholder}>{item}</option>
                    
                })}
            </select>
        </div>
    )

}

export default ListaSuspensa