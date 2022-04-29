async function getWeather {
    var response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=20&lon=20&appid=0bb4245be51d62b696d4a937929aa03c',{method: GET});
    var jsonObj = await response.json()
    console.log(jsonObj)
}