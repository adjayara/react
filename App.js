import './App.css';

// import HelloWorld from "./componentes/HelloWorld";
import Welcome from "./componentes/Welcome";

function App() {

  const nome = "Adjayara Rayane"

  return (
    <div className="App">
      <Welcome nome = "Adjayara Rayane"/>
      <Welcome nome = {nome}/>
 
      
    </div>
  )
}

export default App;
