import './Game.css'

const Game = ({nome, imagem, studio}) =>{
    return(
    <div className='games'>
            <div className='cabecalho'>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{studio}</h5>
            </div>
        </div>
    )

}

export default Game