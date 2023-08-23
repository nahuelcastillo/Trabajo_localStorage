const btt = document.getElementById("buttonText");

const valoresary = [];

btt.addEventListener("click", function(){
    const valuinp = document.getElementById("inputText").value
    
    valoresary.push(valuinp)

    

    localStorage.setItem("valu1", valoresary)
})