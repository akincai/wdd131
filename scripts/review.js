if (localStorage.getItem("counter") === null)
{
    localStorage.setItem("counter", 0);
}
localStorage.setItem("counter", parseInt(localStorage.getItem("counter"))+1)

document.querySelector("#counter").innerHTML = localStorage.getItem("counter");