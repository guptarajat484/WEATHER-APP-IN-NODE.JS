const request = require("postman-request");
const { json } = require("express");

const geocode=(city,callback)=>{

    url="https://api.mapbox.com/geocoding/v5/mapbox.places/" + city + ".json?access_token=pk.eyJ1IjoiZ3VwdGFyYWphdDQ4NCIsImEiOiJja2U0Nml3M2EwNjMyMndyem80bHdhdjBxIn0.Mpf0507qWrul5xDbq9Zs9Q"
    request({url:url,json:true},(err,data)=>{
        if(err)
        {
            console.log('err'+err)

        }
        callback(err,{
            latitude: data.body.features[0].center[1],
            longitude: data.body.features[0].center[0],
            location: data.body.features[0].place_name
        })
    })

}

module.exports=geocode

