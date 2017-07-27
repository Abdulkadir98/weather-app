const request = require('request');

geocodeAddress = (address, callback) => {
request({
    url:,
    json:true'https://maps.googleapis.com/maps/api/geocode/json?address='+ encodeURIComponent(address)
}, (error, response, body) => {
    if(error){
        callback('Unable to connect to Google servers');
    }
    else if(body.status === 'ZERO_RESULTS'){
        callback('Unable to find that address');
    }
    else{
        callback(undefined,
        {
            address:body.results[0].formatted_address,
            latitude:body.results[0].geometry.location.lat,
            longitude:body.results[0].geometry.location.lng
        });

    }



});
};

module.exports.geocodeAddress = geocodeAddress;