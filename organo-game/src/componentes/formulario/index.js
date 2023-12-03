import { useState } from 'react'
import Botao from '../botão'
import CampoTexto from '../campoTexto'
import ListaSuspensa from '../listaSuspensa'
import './Formulario.css'

const Formulario = (props) =>{

    const [nome, setNome] = useState('')
    const [studio, setStudio] = useState('')
    const [imagem, setImagem] = useState('')
    const [genero, setGenero] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCard({
            nome,
            studio,
            imagem,
            genero
        })
        console.log(props.genero)
    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2> Preencha os dados para criar o card de um novo Jogo </h2>
                <CampoTexto 
                obrigatorio = {true} 
                label="Nome" 
                placeholder="Digite o nome do jogo"
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                obrigatorio = {true} 
                label="Studio" 
                placeholder="Digite o Studio que lançou o jogo"
                valor={studio}
                aoAlterado={valor => setStudio(valor)}
                />
                <CampoTexto 
                label="Imagem" 
                placeholder="Digite a url da foto do jogo"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                obrigatorio = {true} 
                label="Genero" 
                itens={props.generos}
                valor={genero}
                aoAlterado={valor => setGenero(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario