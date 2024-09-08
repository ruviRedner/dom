//find the element
const qube = document.querySelector(".qube")
let left = 0
let toop = 0
let istouching = false
//add event
document.body.addEventListener("keydown",e=>{
    console.log(e);
    switch (e.keyCode) {
        case 37:
            if (left > 0 ) {
                left -= 5
                qube.style.backgroundColor = "red";
            }
            else{
                qube.style.backgroundColor= "blue";
            }
            
            break;
        case 38:
            if(toop > 0){
                toop -= 5
                qube.style.backgroundColor = "green";
            }
            else{
                qube.style.backgroundColor = "yellow";
            }
            break;
        case 39:
            if(left + 130 < window.innerWidth){
                left += 5
                qube.style.backgroundColor = "white";
            }
            else{
                qube.style.backgroundColor = "black";
            }
            
            break;
        case 40:
            if(toop + 130 < window.innerHeight){
                toop += 5
                qube.style.backgroundColor = "red";
            }
            else{
                qube.style.backgroundColor = "blue";
            }
          
            break;        
        default:
            break;
    }
    qube.style.left = left +"px"
    qube.style.top = toop + "px"
    
    
})
qube.addEventListener("mouseup",e=>{
    
    istouching = false
    
})
qube.addEventListener("mousedown",e=>{
    istouching = true
})
qube.addEventListener("mousemove",e=>{
    if (istouching) {
        qube.style.left = e.clientX - qube.offsetWidth / 2 + "px"
        qube.style.top = e.clientY - qube.offsetHeight / 2 + "px"
        
    }
})
//detect eroow keys

//play with 

const fn = "ruby"
const age = 34

const ruby = {
    fn,
    age
}
console.log(ruby);

