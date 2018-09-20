//Get ISO week number
Date.prototype.getWeek = function() {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}

var weekNumber = (new Date()).getWeek();
//weekNumber = weekNumber + 2; //To test week incease
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var now = new Date();
document.write(dayNames[now.getDay()] + " (" + weekNumber + ").");
//End ISO week

switch(weekNumber){
    case 38:
    document.getElementById("blueBin").style.display = "flex";
    document.getElementById("greenBin").style.display = "flex";
    break;
    case 39:
    document.getElementById("blackBin").style.display = "flex";
    document.getElementById("brownBin").style.display = "flex";
    document.getElementById("greenBin").style.display = "flex";
    break;
    case 40:
    document.getElementById("blueBin").style.display = "flex";
    document.getElementById("greenBin").style.display = "flex";
    break;
    case 41:
    document.getElementById("blackBin").style.display = "flex";
    document.getElementById("brownBin").style.display = "flex";
    document.getElementById("greenBin").style.display = "flex";
    break;
    case 42:
    document.getElementById("blueBin").style.display = "flex";
    document.getElementById("greenBin").style.display = "flex";
    break;
    case 43:
    document.getElementById("blackBin").style.display = "flex";
    document.getElementById("brownBin").style.display = "flex";
    document.getElementById("greenBin").style.display = "flex";
    break;
    case 44:
    document.getElementById("blueBin").style.display = "flex";
    break;
    case 45:
    document.getElementById("blackBin").style.display = "flex";
    document.getElementById("brownBin").style.display = "flex";
    document.getElementById("greenBin").style.display = "flex";
    break;
    case 46:
    document.getElementById("blueBin").style.display = "flex";
    break;
    case 47:
    document.getElementById("blackBin").style.display = "flex";
    document.getElementById("brownBin").style.display = "flex";
    document.getElementById("greenBin").style.display = "flex";
    break;
    case 48:
    document.getElementById("blueBin").style.display = "flex";
    break;
    case 49:
    document.getElementById("blackBin").style.display = "flex";
    document.getElementById("brownBin").style.display = "flex";
    document.getElementById("greenBin").style.display = "flex";
    break;
    case 50:
    document.getElementById("blueBin").style.display = "flex";
    break;
    case 51:
    document.getElementById("blackBin").style.display = "flex";
    document.getElementById("brownBin").style.display = "flex";
    document.getElementById("greenBin").style.display = "flex";
    break;
    case 52:
    document.getElementById("blueBin").style.display = "flex";
    break;

}




/*
if (weekNumber == 38) {

    document.getElementById("blueBin").style.display = "flex";
    document.getElementById("greenBin").style.display = "flex";
}
else  if (weekNumber == 39) {
    document.getElementById("blackBin").style.display = "flex";
}
*/