import React from "react";
import "./App.css";







const Container = props => {
    const { picOfDay } = props;
    console.log('container props check', picOfDay);
 return (
    <div className='App-logo' > Hello NASA <img alt='pic of space' src={picOfDay.url} /> </div>
 )
}
  export default Container;