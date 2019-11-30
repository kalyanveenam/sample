console.log('app is loading...!!!');

const weatherform=document.querySelector('form');
const search=document.querySelector('input')
const content=document.querySelector('#message2');
const errormsg=document.querySelector('#message1');
const Temp=document.querySelector('#temp');
const Rain=document.querySelector('#rain');
weatherform.addEventListener('submit',(e)=>{
e.preventDefault(); 



console.log('testing'); 
console.log(search.value);
fetch('/weather?location='+search.value+'').then((response)=>{
   
response.json().then((data)=>{
    if(data.error)
    {
        errormsg.textContent=data.error;   
    }
  else{

    content.textContent="Summary:"+data.summary;
   Temp.textContent="Temperature:"+data.temperature;
   Rain.textContent="Chance of rain:"+data.rainProb;
    
  }
     })
})
})