const data = document.getElementById("data")

document.addEventListener("DOMContentLoaded", () => {
    const string = localStorage.getItem("valu1")
    const array = string.split(",")
  

    array.map(element => data.innerHTML += `<li>${element}</li>`);
})