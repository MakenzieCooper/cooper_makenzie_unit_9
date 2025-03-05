function askName() {
    let name = prompt("What is your name?");
    document.getElementById("greeting").innerHTML = "Hello, " + name + "! Welcome to my site!";
}
