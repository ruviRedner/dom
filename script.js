const title = document.createElement("h2")

title.textContent = "hola ruby"
const inp = document.createElement("input")
inp.type = "range"
inp.min = 0
inp.max = 100
inp.value = 20
inp.step = 10
let prev = 20


inp.addEventListener("change" , () => {
    if(inp.value > prev){
        title.textContent = inp.value
    }
    prev = inp.value
    

})
document.body.appendChild(title)
document.body.appendChild(inp)


