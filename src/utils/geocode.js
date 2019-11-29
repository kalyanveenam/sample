const request=require('request')
const geocode=(location,callback)=>{
    const loc="https://api.mapbox.com/geocoding/v5/mapbox.places/"+location+".json?access_token=pk.eyJ1Ijoia2FseWFudmVlbmFtIiwiYSI6ImNrMzdldmZzbzA1OGEzY25vcm9seHZsaDEifQ.aIrwmkQmdj3qdSd6vldMwQ&limit=1";
     request({url:loc, json:true},(error,response)=>{
       if(error)
          { 
              console.log(error)
          callback('Unable to connect to internet',undefined);
          }
          else if(response.body.message) {
          callback(undefined,"please enter valid location");
          }
          else if(response.body.features.length===0)
          {
            callback(undefined,"Probably there is no such location...Try again");    
          }
          else{
           callback(undefined,response.body.features[0].center) 
          }    
     })     
     }

     module.exports=geocode
