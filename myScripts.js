let apiKey="90ae13e7003e3d4bb5c647b5c4844ef2";
let weatherURL="";
async function readWeather(){
    var city=document.getElementById("city").value;
    weatherURL=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    let result=await fetch(weatherURL);
    let users=await result.json();
    const data=users.list;
    const arr=[];
    data.forEach((ele)=>{
        let {main:{temp}}=ele;
                arr.push(temp);
    });
    //console.log(arr);
    const arr1=arr.filter(function(element,index,arr){
        if(index%8==0){
            return element;
        }
    });
    console.log(arr1);
    const arr2=['Day1', 'Day2', 'Day3', 'Day4', 'Day5'];
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: arr2,
            datasets: [{
                label: 'Temperature',
                data: arr1,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        }
    });
}


