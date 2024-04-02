const months = ["December","January","February","March","April","May","June","July","August","September","October","November"];
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Friday","Saturday"];

const end = document.getElementById("end");
let timeContainer = document.getElementById("time-container");

let tempDate = new Date(); //Mon Apr 01 2024 16:56:30 GMT+0200 (Central European Summer Time)
let tempYear = tempDate.getFullYear();//2024(current year).
let tempMonth = tempDate.getMonth();//sends 3(current month but since months start from index 0, then april is 3)
let tempDay =tempDate.getDate();//1

const futureDate = new Date(tempYear,tempMonth,tempDay + 10,11,30,0);//displays the date as to when the giveaway is supposed to end thus:Thu Apr 11 2024 11:30:00 GMT+0200 (Central European Summer Time)

const year = futureDate.getFullYear();//the year in future date
const hours = futureDate.getHours();// the hours of the day in future date.
const minutes = futureDate.getMinutes();// the minutes of the day in futureDate
let month = futureDate.getMonth();// the month of the day in futureDate

month = months[month];
const weekday = weekdays[futureDate.getDay()];
const day = futureDate.getDate();//11
end.textContent = `Giveaway ends on: ${weekday},${day},${month},${year},${hours}hrs,${minutes}am`;

const futureTime = futureDate.getTime();//miliseconds till the giveaway date

function remaindingTime(){
    
    const today = new Date().getTime();

    const t = futureTime-today;

    const oneDay =24*60*60*1000;// all in miliseconds
    const oneHour =60*60*1000;
    const oneMinute =60*1000;

    let days = t/oneDay;
    days = Math.floor(days);

    let hours =  Math.floor((t%oneDay)/oneHour);
    let minutes = Math.floor((t%oneHour)/oneMinute);
    let seconds = Math.floor((t%oneMinute)/1000);
    const values = [days,hours,minutes,seconds];

    if (t < 0) {
        clearInterval(countdown);
        end.innerHTML = `sorry, this giveaway has expired!`;
    }
    
    timeContainer.innerHTML = `${values[0]} days:${values[1]} hours:${values[2]} minutes:${values[3]} seconds.`;

}

let countdown = setInterval(remaindingTime,1000);

remaindingTime();

