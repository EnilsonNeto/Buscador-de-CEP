import { FiSearch } from 'react-icons/fi'
import './styles.css'
function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>
    
    
      <div className="containerInput">
          <input type="text" placeholder="Digite aqui seu CEP">

          </input>

          <button className="buttonSearch">
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
