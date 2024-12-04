import "./App.css";
import Logo from './components/logo/index.js';
import perfil from './images/perfil.svg';
import sacola from './images/sacola.svg';

const optionsText = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
const icons = [perfil, sacola]

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Logo></Logo>
       <ul className="options-header">
        {optionsText.map((texto) => (
          <li><p>{texto}</p></li>
        ))}
       </ul>

       <ul className="icons-header">
        { icons.map( (x) => (
          <li><img src={x}></img></li>
        ))}
       </ul>
      </header>
    </div>
  );
}

export default App;
