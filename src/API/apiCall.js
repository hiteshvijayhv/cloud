import Axios from 'axios'

const API_KEY = 'API_KEY'
 export const getResponse = async(location) => {
     var response;
    await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`)
    .then(res => {
        response =res
    })
  return response
   }
