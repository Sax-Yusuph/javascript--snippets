// Created by Kingshams... This is a simple project, but give me an upvote if you love it.
const btn = document.getElementById('btn');
const progress = document.getElementById('progress');
btn.addEventListener('click', ()=>{
    let width = 0;
    setInterval(()=>{
        if (width <= 99){
            width++;
            progress.style.width = width + "%";
            progress.textContent = width 
        }else{
            clearInterval()

        }
    }, 50)
    
    
})

// document.getElementById("btn").addEventListener("click",()=>{
//          let width= 15;
//          setInterval(()=>{
//              if (width<=99){
//                  width++;
//                  document.getElementById("progress").style.width= width +"%";
//                  document.getElementById("progress").textContent= width +"%";
//              }
//              else{
//                  clearInterval();
//              }
//          },50)
         
// });