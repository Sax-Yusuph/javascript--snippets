//declare your variables
var day = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var notify = document.getElementById("notification")

// description variables
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var e = document.getElementById("d");



 var x = setInterval(()=>{
  // get your time 
 var now = new Date().getTime();
 var event = new Date(2020, 3, 24).getTime();
 var dist = event - now;
 
 
 
 let d = Math.floor(dist/(1000*60*60*24));
 let h = Math.floor((dist%(1000*60*60*24))/(1000*60*60));
 let m = Math.floor ((dist%(1000*60*60))/(1000*60));
 let s = Math.floor((dist%(1000*60))/1000);
 
 //conditions for showing 2 digits
 h= (h<10) ? "0" +h:h;
 m =(m<10) ? "0" + m: m;
 s =(s<10) ? "0" + s: s;
 // description conditions
 a.innerText  = (d==1) ? "day" : "days";
 b.innerText  = (h==1) ? "hour" : "hours";
 c.innerText  = (m==1) ? "minute" : "minutes";
 e.innerText  = (s==1) ? "second" : "seconds";
 
 
 
 if(event<=now){
     clearInterval(x);
     notify.innerText = "EXPIRED!!!";
     
 }else{
 //display the time in the Html elements
     days.innerText= d +":";
     hours.innerText = h + ":";
     minutes.innerText = m + ":";
     seconds.innerText = s;
     
 }
 
    
    
    
},1000);