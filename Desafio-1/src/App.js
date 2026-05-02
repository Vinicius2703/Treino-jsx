import { useState } from 'react';
import './App.css';

function Tema({aoAlternar, modoAtual}){
  
  return(
    <button onClick={aoAlternar} className='botao'>Mudar tema {modoAtual ? 'Escuro' : 'Claro'}</button>
  );
}
function App() {
  const [tema, setTema] = useState(true) 

  // Esta é a função que será enviada para o outro componente
  const alternarTema = () => {
    setTema(!tema);
  };

  return (
    <div className={`bloco ${tema ? 'tema-claro' : 'tema-escuro'}`}>
      <div className='App'>
      <div>
        <h1>Isso é React!</h1>
        <p>CINboraaaaa!</p>
        <Tema aoAlternar={alternarTema} modoAtual={tema}></Tema>
      </div>
      
    </div>
    </div>
    
  );
}

export default App;
