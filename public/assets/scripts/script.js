import moment from "moment"

const Rise = () => {

moment().format();

// setting loaded variable to false, so that I can update it later, so sun only rises one time
let loaded = true;

const main = document.querySelector("#root");
const sunDiv = document.createElement("div");
sunDiv.classList.add("sun_moon", "sun_moonrise");
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
sunDiv.classList.add("sun_moon");
svg.setAttribute("height", "100vw");
svg.setAttribute("width", "100vw");
circle.setAttribute("cx","50vw");
circle.setAttribute("cy","50vw");
circle.setAttribute("r","50vw");
svg.appendChild(circle);
sunDiv.appendChild(svg);

let url = "https://api.sunrise-sunset.org/json?lat=43.4643&lng=-80.5204&formatted=0&date=";
let date = moment().format('YYYY-MM-DD');
url += date;
fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        let sunrise = moment.utc(data.results.sunrise).valueOf();
        let sunset = moment.utc(data.results.sunset).valueOf();
       (sunrise < moment.now() && moment.now() < sunset)? circle.style.fill = "gold" : circle.style.fill = "lightSteelBlue";
       return data;
    })


const makeSunrise = () => {
    debugger
    main.prepend(sunDiv);
    loaded = true;
}

window.addEventListener("focus", makeSunrise);

window.addEventListener("load", makeSunrise);
debugger

window.addEventListener("blur", function() {
    if (loaded) removeEventListener("focus", makeSunrise)
})

// window.addEventListener("beforeunload", function() {
//     window.addEventListener("focus", makeSunrise)
//     // loaded = false
// })
}

export default rise