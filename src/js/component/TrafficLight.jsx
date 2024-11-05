import React, { useState } from 'react';

function TrafficLight() {
  const [color, setColor] = useState("red");

  const handleClick = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <div style={{
      backgroundColor: 'black', 
      width: '80px', 
      padding: '10px', 
      borderRadius: '20px', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <div
        onClick={() => handleClick("red")}
        style={{
          backgroundColor: color === "red" ? "red" : "#800000",
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          margin: '10px',
          boxShadow: color === "red" ? "0 0 20px red" : "none",
          cursor: 'pointer'
        }}
      />
      <div
        onClick={() => handleClick("yellow")}
        style={{
          backgroundColor: color === "yellow" ? "yellow" : "#808000",
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          margin: '10px',
          boxShadow: color === "yellow" ? "0 0 20px yellow" : "none",
          cursor: 'pointer'
        }}
      />
      <div
        onClick={() => handleClick("green")}
        style={{
          backgroundColor: color === "green" ? "green" : "#006400",
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          margin: '10px',
          boxShadow: color === "green" ? "0 0 20px green" : "none",
          cursor: 'pointer'
        }}
      />
    </div>
  );
}

export default TrafficLight;