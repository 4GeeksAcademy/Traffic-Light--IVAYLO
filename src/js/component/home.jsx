import React from 'react';
import TrafficLight from './TrafficLight';

function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0'
    }}>
      <TrafficLight />
    </div>
  );
}

export default Home;