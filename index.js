let h1=document.querySelector("h1");
let  i = document.querySelector("input");
let btn=document.querySelector("button");
let h2=document.querySelector('#city');
let t=document.querySelector('#temp');
let d=document.querySelector('#des');
btn.addEventListener("click", async function(){
let city =i.value;
let url ="https://api.openweathermap.org/data/2.5/weather?q=";
let url2="&appid=225cadb136c5a334d8860147bd69e9a0&units=metric";
let final=url+city+url2;
console.log(final);
try{
    h2.innerText="";
    t.innerText="";
    d.innerText="";
    let res = await fetch(final);
    let data= await res.json();
    if(city!=data.name) 
    {
        h2.innerText="Opps... Invalid City";
    }
    else
    {
    h2.innerText=data.name;
    t.innerText="Temperature: " + data.main.temp + " degree celsius";
    d.innerText="Description: " + data.weather[0].description;
    console.log(data);
    }
}
catch(e){
    console.log(e);
}
  
});


 