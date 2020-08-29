const express = require('express')
const path = require('path')

const request = require('postman-request')
const geocode = require('./geocode')
const weather = require('./weather')
const app = express()


port=process.env.PORT || 8000

app.get("/", (req, res) => {


    res.render('index')


})

app.get('/weather', (req, res) => {
    if (req.query.city | req.query.city != undefined) {

        geocode(req.query.city, (err, data) => {
            if (err) {
                return res.send({ err })
            }
            else {
                weather(data.latitude, data.longitude, (err, fdata) => {
                    if (err)
                        return res.send({ err })
                    else {
                        
                        return res.send({
                            d: fdata,
                            da: data.location
                        })

                    }
                })
            }
        })
    }


})


app.listen(port, () => {
    console.log("Server Is Runing On 8000"+port)
})

