function displayweather(){
    let city=document.getElementById("city").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=c422530f973fe17e63e9fc04e76dd79d`)
    .then(response=>response.json()) 
    .then(data=>(
        showweatherDetail(data)
        ))
    .catch(err=>{
        console.log(err);
    })
}
result1=document.getElementById('result');

// showweatherDetail(data){
//     console.log(data);
//     result1.innerHTML=`<h3>$ {data.base} </h3>`
//     data.name;
// }
