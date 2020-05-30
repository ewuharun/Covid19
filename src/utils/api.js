const request = require("request")
const Corona = (country, callback) => {
    const link = "https://api.covid19api.com/dayone/country/" + country
    request({ url: link, json: true }, (error, response) => {
        if (error) {
            callback('unable to fetch data', undefined)
        } else if (response.body.length == 0) {
            callback('no data found', undefined)
        } else {
            callback(undefined, response.body)
        }
    })
}

module.exports = Corona