

const w_key= "8e3049d6b4b67d62686e4f583102b88e"
const w_url= "https://api.openweathermap.org/data/2.5/weather?"
const l_key = "5d881f6ce7a1a93fa6d6"
let lat
let lon
const loc_uri = 'https://locationiq.org/v1/search.php?key='


const frm = document.getElementById('weather')



frm.addEventListener('submit',(e) => {


e.preventDefault()


const city = document.getElementById('city').value
    const country = document.getElementById('country').value
    const DIV = document.getElementById('display')
    while (DIV.hasChildNodes()) {
        DIV.removeChild(DIV.lastChild)
    }


fetch(`${loc_uri}${l_key}&format=json&city=${city}&country=${country}`)
  .then((res) => res.json())
  .then((data) => {
      lat = data[0].lat
      lon = data[0].lon
    get_weather_info(lat,lon)
    
  })
  .catch((e) => console.log(e, "what's happening dave?"))
 })



function get_weather_info(lat,lon)
{
    let i=0
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=${w_key}`)
  .then((res) => res.json())
  .then((data) => {

      for(i=0;i<35;i=i+8)
{
    const myDiv = document.getElementById('display')
    const my_des = document.createElement('h3')
    const my_temp = document.createElement('h4')
    const my_img = document.createElement('img')
    const my_date = document.createElement('h2')
    my_des.textContent = data.list[i].weather[0].description
    my_temp.textContent = data.list[i].main.temp - 273
    my_img.setAttribute('src',`images/${data.list[i].weather[0].icon}.png`)
    my_date.textContent = data.list[i].dt_txt

    myDiv.appendChild(my_date)
    myDiv.appendChild(my_des)
    myDiv.appendChild(my_temp)
    myDiv.appendChild(my_img)
}
    
  })
  .catch((e) => console.log(e, "what's happening dave?"))
}