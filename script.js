document.addEventListener("DOMContentLoaded", ()=> {

    const day = document.getElementById("day");
    const month = document.getElementById("month");
    const nameHbd = document.getElementById("name");

    day.addEventListener("change", function() {
        localStorage.setItem("day",day.value)
    })
    month.addEventListener("change", function() {
        localStorage.setItem("month",month.value)
    })

    nameHbd.addEventListener("change", function() {
        localStorage.setItem("name",nameHbd.value);
        const title = document.querySelector("title");
        title.innerText=`Happy birthday ${localStorage.getItem("name")}`;
    })
    
    if(localStorage.getItem("name") !== null) {
        const title = document.querySelector("title");
        title.innerText=`Happy Birthday ${localStorage.getItem("name")}`;
    }
})