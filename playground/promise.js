
// var somePromise = new Promise((resolve, reject) => {
//     resolve('Hey it worked!');
// });
// //the argument passed in resolve gets passed in message.
// somePromise.then((message) => {
// console.log('Success:', message);
// });

var asyncAdd = (a,b) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number'){
            resolve(a+b);
            }
            else{
                console.log('Both arguments must be numbers');
                }
        }, 1500);

    });

};

asyncAdd(5,7).then((res) => {

    console.log('Results:', res);
}, (errorMessage) => {
    console.log(errorMessage);
});