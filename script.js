const daysEl=document.getElementById('days')
const hoursEl=document.getElementById('hours');
const minsEl=document.getElementById('mins');
const secondsEl=document.getElementById('seconds')
const newYears= '3 Oct 2021' 
function countdown() {
 const newYearsDate=new Date(newYears)
 const currentDate= new Date();
 Totalseconds=(newYearsDate-currentDate)/1000
 mins=Math.floor(Totalseconds/60) %60;
 hours=Math.floor(Totalseconds/3600) %24;
 days=Math.floor(Totalseconds/3600/24);
 const seconds=Math.floor(Totalseconds %60)
 daysEl.innerHTML=days;
hoursEl.innerHTML=hours;
minsEl.innerHTML=mins;
secondsEl.innerHTML=seconds;
}
countdown();
setInterval(countdown, 1000);
