import React, {useState, useEffect} from "react";
import "./App.css";
import Axios from "axios";






const Container = props => {

 const [picOfDay, setPicOfDay] = useState()
  useEffect(() =>{
    Axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response =>{
      console.log('goodie', response);
      setPicOfDay(response);
    })
    .catch(error => {
      console.log('data sux');
    })
  },[])
}
  export default Container;