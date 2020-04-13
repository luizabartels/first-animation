function Move()
{
    var line = document.getElementById("line").offsetWidth;
    var car = document.getElementById("car");
    var number = document.getElementById("number").value;
    var pos = number * line/100;
    car.style.left = pos + 'px';
    var posInt = parseFloat(car.style.left); 

    /* Had to use a hidden input to store the old value from the input number. Storing it on a regular variable didn't work */
    
    if (document.getElementById("hiddenId").value < posInt) car.style.transform = "scaleX(2) scaleY(2)";
    else if (document.getElementById("hiddenId").value > posInt) car.style.transform = "scaleX(-2) scaleY(2)";

    document.getElementById("hiddenId").value = posInt;
}