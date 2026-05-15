import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [Idade, setIdade] = useState('')
  const [Msg, setMsg] = useState('')

  function Verificador(){
    const valorAtual = parseInt(Idade)
    if(isNaN(valorAtual)){
      setMsg('Por favor, digite uma idade válida.')
      return
    }
    if(valorAtual >= 18){
      setMsg('Acesso liberado!.')
    } else{
      setMsg('Acesso Negado!.')
    }

    }


  return (
      <div>
        <h1>verificador de idade</h1>
        <input type="number" placeholder='idade' value={Idade} onChange={(e) => setIdade(e.target.value)} />
        <button onClick={Verificador}>Enviar</button>

        {Msg && <p className="resultado">{Msg}</p>}
      </div>


  )
}

export default App
