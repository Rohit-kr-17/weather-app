//init storage
const storage = new Storage();


//Get stored location data
const weatherLocation = storage.getLocationData();
//inti weather object
const weather = new Weather(weatherLocation.city);

//init UI
const ui = new UI();


//Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-1').addEventListener('click', () => {
    document.getElementById('city').value = '';
});

//change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {

    const city = document.getElementById('city').value;

    ///change Location
    weather.changeLocation(city);

    //set Lodation in local storage
    storage.setLocationData(city);

    //get and display weather
    getWeather();

    //close modal
    $('#locModal').modal('hide');
});
function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => ui.showAlert('User not found', 'alert alert-danger'));
}
