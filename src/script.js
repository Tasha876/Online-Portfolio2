import moment from "moment"

const rise = () => {

    moment().format();

    const main = document.querySelector("#root:not(.resume)");
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
            const sunrise = moment.utc(data.results.sunrise).valueOf();
            const sunset = moment.utc(data.results.sunset).valueOf();
            (sunrise < moment.now() && moment.now() < sunset)? circle.style.fill = "gold" : circle.style.fill = "lightSteelBlue";
            return data;
        })
        .catch(function (){
            const time = new Date();
            const default_sunrise = 6
            const default_sunset = 18
            default_sunrise <= time.getHours() && time.getHours() <= default_sunset? circle.style.fill = "gold" : circle.style.fill = "lightSteelBlue";
        })


    const makeSunrise = () => {
        if (!main.contains(sunDiv)) main.prepend(sunDiv);
    }

    makeSunrise()

}

export default rise