import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import api from './services/api';
import './styles.css'
function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});
  const vazio = ("Nenhum");

  async function handleSearch() {

    if (input === '') {
      alert("Preencha o campo!")
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      setInput("");
    } catch {
      alert("Erro ao buscar esta informação!");
      setInput("");
    }

  }

  return (
    <div className="container">
      <div className="border">

        <h1 className="title">Buscador CEP</h1>

        <div className="containerInput">
          <input type="text"
            placeholder="Digite aqui seu CEP"
            value={input}
            maxLength={8}
            onChange={(e) => setInput(e.target.value)}
           />


          <button
            className="buttonSearch" onClick={handleSearch}>
            <FiSearch size={25} color="#fff" />
          </button>
        </div>

        {Object.keys(cep).length > 0 && (

          <main>
            <h2>CEP: {cep.cep}</h2>

            <span>{cep.logradouro}</span>
            <span>Complemento: {cep.complemento || vazio} </span>
            <span>Bairro: {cep.bairro}</span>
            <span>Cidade: {cep.localidade} {cep.uf}</span>

          </main>
        )}


      </div>
    </div>
  );
}

export default App;
