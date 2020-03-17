    // alert("Description: this is a simple Javascript clock project. It changes the background automatically with its hex value.If you like my code please give me an upvote. Thank you")
    
        var clock = document.getElementById("clock");
        var hexValue = document.getElementById("hex-value");
        var meridian = document.getElementById("meridian");


        function hexClock(){
        
            var time= new Date();
            var hours = (time.getHours() % 12).toString();
            var minutes = time.getMinutes().toString();
            var seconds = time.getSeconds().toString();
            
            if(time.getHours()> 12 ){
            meridian.innerText  =     "PM" 
            }
            else if( time.getHours()== 12){
                 hours = time.getHours();
                 meridian.innerText ="PM"
            }
            else { meridian.innerText ="AM"};
            
                    
            if (hours.length < 2){
                hours = 0 + hours;
            }
            if (minutes.length < 2){
                minutes = 0 + minutes;
            }
            if (seconds.length <2){
                seconds = 0 + seconds
            }
             
           var clockstr= `${hours}:${minutes}:${seconds}`;
           var  hexValuestr = "#" + hours + minutes + seconds;
            
          clock.innerText=clockstr;
          hexValue.innerText= hexValuestr ;
          document.body.style.backgroundColor = hexValuestr ;
        }
    
     setInterval(hexClock, 1000);
    
        

    
    