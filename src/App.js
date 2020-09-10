import React, {useState, useEffect} from "react";
import "./App.css";
import Container from './Container';
import Axios from "axios";

function App() {
  const [picOfDay, setPicOfDay] = useState({})
  useEffect(() =>{
    Axios.get('https://api.nasa.gov/planetary/apod?api_key=nsEFql6BVL4yA2tKrfchPao8DZoEGlrWicKmkooN')
    .then(response =>{
      setPicOfDay(response.data);

      console.log('goodie', response.data);
    })
    .catch(error => {
      console.log('data sux',error);
    })
  },[])
  return (
    <div className="App">
      <Container picOfDay={picOfDay}/>
      <img alt='pic of SPAAACE'src={picOfDay.url} />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
