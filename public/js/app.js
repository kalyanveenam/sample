
console.log('app is loading...!!!');

const weatherform=document.querySelector('form');
const search=document.querySelector('input')
const content=document.querySelector('#message2');
const errormsg=document.querySelector('#message1');

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

    content.textContent=data.summary;
  }
     })
})
})