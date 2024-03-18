import './App.css';
import Home from './Componentes/Home';
import Sobre from "./Componentes/Sobre";
import Trabalho from './Componentes/Trabalho';
import Depoimentos from './Componentes/Depoimentos';
import Contatos from './Componentes/Contatos';
import Footer from './Componentes/Footer';
import Formulario from './Componentes/Formulario';


function App() {
  return (
    <div className="App">
      <Home/>
      <Sobre/>
      <Trabalho/>
      <Depoimentos/>
      <Formulario/>
      <Contatos/>
      <Footer/>
    </div>
  );
}

export default App;
