import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import  api  from './services/api';
import './styles.css'
function App() {
  const [input, setInput] = useState('')
  
  async function handleSearch () {

    if(input === '') {
      alert("Preencha o campo!")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      console.log(response.data);
    }catch{
      alert("Erro ao buscar esta informação!");
      setInput("");
    }

  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
    
    
      <div className="containerInput">
          <input type="text"
           placeholder="Digite aqui seu CEP"
           value={input}
           onChange={(e) => setInput(e.target.value) }
           />


          <button className="buttonSearch" onClick={handleSearch}>
            <FiSearch size={25} color="#fff"/>
          </button>
      </div>

      <main>
        <h2>CEP: 55038-190</h2>

        <span>Rua Santa Maria da boa vista</span>
        <span>Complemento</span>
        <span>Boa vista 2</span>
        <span>Caruaru-PE</span>
      </main>



    </div>
  );
}

export default App;
