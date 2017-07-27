
const yargs = require('yargs');

const geocode = require('./geocode/geocode');

const weather = require('./weather/weather');

const argv = yargs
    .options({
        a:{
            demand:true,
            alias:'address',
            describe:'to fetch weather for',
            string:true
        }
    })
    .help()
    .alias('help','h')
    .argv;

    //console.log(argv);
    // function takes in address from command line as arguments and finds coordinates
    geocode.geocodeAddress(argv.address, (errorMessage, results) => {
        if(errorMessage){
            console.log(errorMessage);
        }
        else {
            console.log(results.address);

            //if the coordinate pair is suucessfully found, it takes the coordinates and finds the weather.
            weather.getWeather(results.latitude,results.longitude,(errorMessage, weatherResults)=>{
            if(errorMessage){
            console.log(errorMessage);
        }
            else {
            console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`);
        }
    });
        }
    });

//13.0368 lat
//80.2676,()=>{





