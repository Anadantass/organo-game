import Game from '../Game'
import './Genero.css'

const Genero = (props) => {
    return(
        <section className="genero" style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className="game">
                {props.games.map(game => <Game nome={game.nome} studio={game.studio} imagem={game.imagem}/>)}
            </div>
        </section>
    )
}

export default Genero