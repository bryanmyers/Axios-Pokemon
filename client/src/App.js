import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'

function App() {

  const [pokeList, setpokeList] = useState([])

  useEffect(() =>{
    // axios.get('https://pokeapi.co/api/v2/pokemon?limit=807').then( resp => setpokeList(resp.data) )
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807').then( resp => processData(resp.data.results) )
  },[])


  const processData = (data) => {

    var nameArray = []

    for (const object of data){
      nameArray.push(object)
    }
    setpokeList(nameArray)
  } 

  //this works but I'll bet this could be done with a map in the axios get .then

  let list = pokeList.map((poke, index)=> <li key={index}>{poke.name}</li>)

  return (
    <ol>
      {list}
    </ol>
  );
}

export default App;
