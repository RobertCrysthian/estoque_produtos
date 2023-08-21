import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import TableProduct from './Componentes/Table';





function App() {


  const [apiData, setApiData] = useState([])

  useEffect(() => {
    dados()
  }, [])

  const dados = () => {
    axios.get("http://localhost:8080/produtos")
      .then(resposta => { setApiData(resposta.data) })
      .catch(erro => { console.log(erro) })
  }


  if (!apiData) return null;

  return (
    <div className="App">
      <TableProduct apiData={apiData} setApiData={setApiData} dados={dados}/>
    </div>
  );
}

export default App;
