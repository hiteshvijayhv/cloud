import React, { useState, useEffect } from 'react';
import './App.css';
import { getResponse } from './API/apiCall'
import ShowData from './components/ShowData'

function App() {

  const [location, setlocation] = useState('')
  const [weather, setWeather] = useState('')

    const processResponse = async() => {
      const {data} = await getResponse(location)
      setWeather(data)
      console.log(weather)
    }

  return (
    <div className="App">
      <div className="take-input">
        <div className='input-div'>
          <input
            className='input-field'
            name='enter-location'
            placeholder='location'
            value={location}
            onChange={(e) => setlocation(e.target.value)} />
        </div>
        <div className='button-div'>
          <button className='search-btn' onClick={processResponse}>Search</button>
        </div>
      </div>

      <div className='show-data'>
      <ShowData weather={weather} />
      </div>
    </div>
  );
}

export default App;
