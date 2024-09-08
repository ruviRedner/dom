const title = document.createElement("h2")

title.textContent = "hola ruby"
const inp = document.createElement("input")
const inp2 = document.createElement("input")
inp.type = "range"
inp.min = 0
inp.max = 100
inp.value = 20
inp.step = 10
let prev = 20
inp2.addEventListener("paste",e=> {alert("try to be original for once")
    e.preventDefault()
    e.target
})


inp.addEventListener("change" , () => {
    if(inp.value > prev){
        title.textContent = inp.value
    }
    prev = inp.value
    

})
document.body.appendChild(title)
document.body.appendChild(inp)
document.body.appendChild(inp2)

const arr = [1,4,7,9,56]
console.log(arr.filter((x)=> {
    return x  
}));
console.log(arr.map(x=>!x));
console.log(arr.reduce((a,b)=>a+b ,0));


const h1s = document.querySelectorAll(".color-change")
for (const h1 of h1s) {
     h1.addEventListener("click",e=>{
        if(e.ctrlKey){
           e.target.style.color="red"
        }
        if (e.shiftKey) {
            e.target.style.color="blue"
            
        } 
        else{
             e.target.style.color="green"
        }
        console.log(e);
        
       
     })
    
}




