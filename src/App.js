import React from 'react';
import './App.css';
import Stepper from './components/stepper';
import TodayWeather from './components/today-weather'
import TomorrowForecast from './components/tomorrow-weather'

function App() {
  const steps = [
    {
      component: <TodayWeather/>
    },
    {
      component: <TomorrowForecast/>
    },
    {
      component: <div>Finale component</div>
    }
  ];

  return (
    <div className='main'>
      <Stepper steps={steps}/>
    </div>
  );
}

export default App;
