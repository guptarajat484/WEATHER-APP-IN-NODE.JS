const request = require('postman-request')
const forcast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=50afd702e3e5d26ba2a7bd64af883a91&query=' + latitude + ',' + longitude + '&units=f'
    request({ url: url, json: true }, (err, data) => {
        if (err) {

            callback(err)
        } else if (data.body.err) {

            callback(err)
        }
        else {

            callback(err, data.body.current)
        }

    })


}

module.exports = forcast