import {useState} from 'react'

export default function App() {

  const [input, setInput] = useState("")
  const [idade, setIdade] = useState("")
  const [aluno, setAluno] = useState("");

  function Handleclick() {
    setAluno(input);
  }

  return(
    <div>
      <h1>Conhecendo useState</h1>

      <input 
      placeholder="Digite seu nome"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />

      <input
      placeholder='Digite sua idade'
      value={idade}
      onChange={(e) => setIdade(e.target.value)}
      />

      <br />

      <button onClick={Handleclick}>Mostrar aluno</button>

      <hr />

      <h3>Bem vindo: {aluno}</h3>
      <h3>digite sua idade: {idade}</h3>
    </div>
  )
}