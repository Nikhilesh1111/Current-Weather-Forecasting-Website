let loc =document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate =document.getElementById("climate");
let date = document.getElementById("date");
const searchInput=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");

searchButton.addEventListener('click', (e)=>
{
    e.preventDefault();
    getWeather(searchInput.value);
    searchInput.value='';
});


const getWeather=async (city)=>
{
    try{

        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dab3af44de7d24ae7ff86549334e45bd`,
   
            {mode: 'cors'}
        );

        let time=new Date();

	    let months_year=["January","February","March","April","May","June","July","August","September","October","November","December"];
	    let days_week=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

	    let day=days_week[time.getDay()];
	    let pdate=time.getDate();
      	let month=months_year[time.getMonth()];
	    let year=time.getFullYear();

        const weatherData= await response.json();
        console.log(weatherData);
    
        const{feels_like}=weatherData.main;
        const{id,main}=weatherData.weather[0];
        
        loc.innerText=`${weatherData.name},${weatherData.sys.country}`;
        climate.textContent=main;
        tempvalue.textContent=Math.round(feels_like-273);
        date.innerText=`${day} ${pdate} ${month} ${year}`;

        if(id<300 && id>=200)
        {
            tempicon.src="./icons1/thunderstorm.svg"
        }
        else  if(id<400 && id>=300)
        {
            tempicon.src="./icons1/drizzle.svg"
        }
        else if(id<600&& id>=500)
        {
            tempicon.src="./icons1/rain.svg"
        }
        else  if(id<700 && id>=600)
        {
            tempicon.src="./icons1/snow.svg"
        }
        else if(id==701)
        {
            tempicon.src="./icons1/mist.svg"
        }
        else if(id==711)
        {
            tempicon.src="./icons1/smoke.svg"
        }
        else if(id==721)
        {
            tempicon.src="./icons1/haze.svg"
        }
        else if(id==731)
        {
            tempicon.src="./icons1/dust.svg"
        }
        else if(id==741)
        {
            tempicon.src="./icons1/fog.svg"
        }
        else if(id==751)
        {
            tempicon.src="./icons1/sand.svg"
        }
        else if(id==761)
        {
            tempicon.src="./icons1/dust.svg"
        }
        else if(id==762)
        {
            tempicon.src="./icons1/smoke.svg"
        }
        else if(id==771)
        {
            tempicon.src="./icons1/squall.svg"
        }
        else if(id==781)
        {
            tempicon.src="./icons1/tornado.svg"
        }
        else if(id==800)
        {
            tempicon.src="./icons1/clear.svg"
        }
        else
        {
            tempicon.src="./icons1/clouds.svg"
        }
    }
    catch(error)
    {
        alert('city not found');
    }
};
