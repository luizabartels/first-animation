function Move()
{
    var line = document.getElementById("line").offsetWidth;
    var car = document.getElementById("car");
    var number = document.getElementById("number").value;
    var pos = number * line/100;
    car.style.left = pos + 'px';
    var posInt = parseFloat(car.style.left);

    if (oldPos < posInt)
    {
        console.log("Old");
        console.log(oldPos);
        console.log("####");

        car.style.transform = "scaleX(-2) scaleY(2)";

        console.log("Old");
        console.log(oldPos);
        console.log("CarPos");
        console.log(posInt);

    }else if (oldPos > posInt)
    {
        console.log("Old");
        console.log(oldPos);
        console.log("####");

        car.style.transform = "scaleX(2) scaleY(2)";
        console.log("Old");
        console.log(oldPos);
        console.log("CarPos");
        console.log(posInt);
    }
    
    oldPos = posInt -1;
    
}