import React, {useState, useEffect} from "react";
import "./App.css";
// import Container from './Container';
import Axios from "axios";

function App() {
  const [picOfDay, setPicOfDay] = useState()
  useEffect(() =>{
    Axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response =>{
      setPicOfDay(response);
      console.log('goodie', response);
    })
    .catch(error => {
      console.log('data sux',error);
    })
  },[])
  return (
    <div className="App">
      {/* <Container /> */}
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
