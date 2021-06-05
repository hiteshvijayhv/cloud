import React from 'react'
import './ShowData.css'
function ShowData({weather}) {
    return (
        <div className='body'>
            <h1 className='main-body'>
            {weather.main && (
                <div className="city">

                    <h2>
                        {weather.name}, {weather.sys.country}
                    </h2>

                    <div className="temp-div">
                        <h3>{Math.round(weather.main.temp) / 10}
                        <sup>&deg;c</sup></h3>
                    </div>

                    <div>
                        <img className='weather-img' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
                        <h4>{weather.weather[0].description}</h4>
                    </div>

                    <div className='atmosphere-data'>
                        <div>
                            Humidity: {weather.main.humidity}
                        </div>
                        <div>
                            Wind: {weather.wind.speed}km/h
                        </div>
                    </div>
                </div>
            )}
            </h1>
        </div>
    )
}

export default ShowData
