const ApiKey = 'd138ca0ce2897544811abcbc765ce91d'
const city = document.querySelector('.countryWeather')
const icon = document.querySelector('.material-icons')
const descriptionEle = document.querySelector('.description')
const humidityEle = document.querySelector('.humidity')
const windEle = document.querySelector('.wind')
const searchBarEle = document.querySelector('.searchBar')
const searchIconEle = document.querySelector('.searchIcon')
const tempEle = document.querySelector('.degree');



let weather = {
    getWeather : function () {
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBarEle.value}&appid=${ApiKey}&units=metric`)
        .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                 
            }).then((data) => this.displayWeather(data))



        }
    

    ,
        
    displayWeather : function (data) {

        const {name} = data ;
        const {temp, humidity} = data.main;
        const {icon, description} = data.weather[0];
        const {speed} = data.wind;
    
    
        city.innerText = `Weather in ${name}`;
        tempEle.innerText = `${temp}°C`;
        icon.src = `https://openweathermap.org/img/wn/${icon}.png`;
        descriptionEle.innerText = description;
        humidityEle.innerText = `humidity : ${humidity}%`;
        windEle.innerText = `Wind speed : ${speed} km/h`
    }

    ,

    search : function () {

        this.getWeather(searchBarEle.value);
        
    }
    

    }


    searchIconEle.addEventListener("click", function () {
        weather.search();
      });
      
    
      searchBarEle.addEventListener("keyup", function (event) {
          if (event.key == "Enter") {
            weather.search();
          }
        });
      
        weather.getWeather('Egypt');

        

       

        


      

      

      
    


    
