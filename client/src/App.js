import './App.css';
import {useEffect, useState} from 'react'

function App() {

  const [pokiList, setPokiList] = useState([])

  useEffect(() =>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then((result)=>{
      return result.json()
    })
    .then((res)=>{
      setPokiList(res.results)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])

  let list = pokiList.map((poki, index)=> <li key={index}>{poki.name}</li>)

  return (
    <ol>
      {list}
    </ol>
  );
}

export default App;
