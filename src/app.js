//require express
 //load express method
const express= require("express");
const locationCode=require('./utils/geocode');
const forecast=require('./utils/forecast');
const path= require('path');
const partial=require('hbs');
const app=express();
const port=process.env.PORT || 3000
const publicDirPath=path.join(__dirname,'../public');
const viewsDirPath=path.join(__dirname,'../Templates/views');
const partialPath=path.join(__dirname,'../Templates/partials');
console.log("pat->"+partialPath)
app.set('view engine','hbs')
app.set('views',viewsDirPath);
partial.registerPartials(partialPath);
app.use(express.static(publicDirPath))
app.get('',(req,res)=>{
    res.render('index',{
     title:'Weather',
     name: 'kalyan'   
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About ',
        name:'kalyan'
    })
})  
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help',
        name:'kalyan'
    })
})

app.get('/weather',(req,res)=>{


    if(!req.query.location){
           

        return res.send({
            error:'please enter location'
        })}
    else if ((req.query.location)==='!'){
        return res.send({
            error:'Probably, this isnt a valid location'
        })}
    
        const loc=req.query.location;
        console.log(loc);
     const locdata= locationCode(loc,(error,response)=>{
    
        const dt=(response[1]+","+response[0]);
        console.log(dt)
        forecast(dt,(error,response)=>{
             res.send({ 
                 summary:response.summ,
                 temperature:(response.tempCel) ,
                 rainProb:response.rainProb
             })
            console.log("Summary: "+response.summ);
              console.log("Temperature: "+(response.tempCel)+" degrees");
              console.log("Probability of Rain: "+response.rainProb+"%");
          }) 
         }
         )
        })
     
    // res.send(
    //          {
    //     forecast:'It is raining',
    //     location:req.query.location    
    //     },
    //     )
    //  })


     app.get('/help/*',(req,res)=>{
         res.render('PNF',{
             message:'No help document available',
             name:'kalyan'
         })
         })
         
     app.get('*',(req,res)=>{
        res.render('PNF',{
            message:'404 page not found',
            name:'kalyan'
        })
        })
     app.listen(port,()=>{
        console.log('app is up and running on'+port)
        })
    