
const API_KEY = "a047a00e00d19f602931685f0a2de05f"

var submitbtn = document.getElementById('submit');
submitbtn.addEventListener('click', getweather)

function getweather(){
    var citynameelement = document.getElementById("cityname");
    var cityname = citynameelement.value;   
    const fetchresponse = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}&units=Metric`);
    const fetchpromisehandle = fetchresponse.then(
        (res)=>{
    
            return res.json()
        },
        (rej)=>{console.log(rej)}
    );

    const response = fetchpromisehandle.then(
        (data) => {
            console.log(data)
            var temp = data.main.temp;
            var pelement = document.getElementById('temp');
            pelement.innerText = temp; 
        }
    );    
}




