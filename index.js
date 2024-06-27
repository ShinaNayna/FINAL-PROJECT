function displayTitle(event){
    event.preventDefault();
    document.getElementById("myBtn").style.display = "none";
    document.getElementById("form-1").removeAttribute("hidden");
    document.getElementById("title").innerHTML = "CONNEXION";
    document.getElementById("title").classList.add("text-2xl");
    document.getElementById("btn").removeAttribute('disabled');
}
function activecolor(){
    document.getElementById("live").classList.add("text-2xl");
}

function rugbytext(){
    document.getElementById("desc").innerHTML = "ok";
}
    document.getElementById("myBtn").addEventListener("click", displayTitle);
    document.getElementById("live").addEventListener("click", activecolor);
    document.getElementById("rugby").addEventListener("click", rugbytext);


   
    
    