import { useState } from 'react';
import Banner from './componentes/banner';
import Formulario from './componentes/formulario';
import Genero from './componentes/Genero';

function App() {

  const generos = [
    {
      nome: 'Ação',
      corPrimaria: '#FF0000',
      corSecundaria: '#FFCECE'
    },
    {
      nome: 'Corrida',
      corPrimaria: '00A3FF',
      corSecundaria: '#C5EAFF'
    },
    {
      nome: 'Esportes',
      corPrimaria: '#33E100',
      corSecundaria: '#BDF1BE'
    },
    {
      nome: 'Estratégia',
      corPrimaria: '#E7EC00',
      corSecundaria: '#F7F8C3'
    },
    {
      nome: 'FPS',
      corPrimaria: '#B100FF',
      corSecundaria: '#E3C4F1'
    },
    {
      nome: 'MOBA',
      corPrimaria: '#FF00F9',
      corSecundaria: '#FFCFFE'
    },
    {
      nome: 'Puzzle',
      corPrimaria: '#00EED6',
      corSecundaria: '#C3F9F3'
    },
    {
      nome: 'RPG',
      corPrimaria: '#FF9B00',
      corSecundaria: '#FADEBD'
    },
    {
      nome: 'Terror',
      corPrimaria: '#000000',
      corSecundaria: '#EABBBB'
    },
  ]

  const [games, setGames] = useState([])

  const aoNovoCard = (game) => {
    setGames([...games, game])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario generos={generos.map(genero => genero.nome)} aoCard={game => aoNovoCard(game)}/>
      
      {generos.map(genero => <Genero 
      key={genero.nome} 
      nome={genero.nome} 
      corPrimaria={genero.corPrimaria} 
      corSecundaria={genero.corSecundaria}
      games={games}
      />)}
    </div>
  );
}

export default App;
