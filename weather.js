class Weather {
    constructor(city) {
        this.apiKey = '702efc4fb6cd4bd29ee131532212406';
        this.city = city;
    }

    //fetch from weather API
    async getWeather() {
        // const reponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ this.city },${ this.state }&appid=${ this.apiKey }&units=metric`);
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${ this.apiKey }&q=${ this.city }&aqi=yes`);
        const responseData = await response.json();

        return responseData;
    }
    //change weather locatio
    changeLocation(city) {
        this.city = city;
    }
}

