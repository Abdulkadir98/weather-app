const request = require('request');


var getWeather = (lat,lng, callback) => {
request({
    url:`https://api.darksky.net/forecast/94979bab82481924a8332f17e07117b2/${lat},${lng}`,
    json:true
},(error, response, body) => {
    if(error){
        callback('Unable to connect to forecast.io severs');
    }
        else if(response.status===400){
            callback('Unable to find the weather');
        }

            else{
                callback(undefined, {
                    temperature:body.currently.temperature,
                    apparentTemperature:body.currently.apparentTemperature

                });
            }
});
};

module.exports.getWeather = getWeather;
