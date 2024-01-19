//Initial variables

var seconds = parseInt(prompt("Please enter value in seconds"));
var minutes;
var hours;
var days;
var tempMinutes;
var tempHours;
var tempDays;

//Convert seconds to minutes
tempMinutes = seconds;
while (tempMinutes >= 0){
  tempMinutes -= 60;
  if (tempMinutes >= 0){
    minutes++;
  }
}
seconds -= (minutes * 60);

//Convert minutes to hours
tempHours = minutes;
while (tempHours >= 0){
  tempHours -= 60;
  if (tempHours >= 0){
    hours++;
  }
}
minutes -= (hours * 60);

//Convert hours to days
tempDays = hours;
while (tempDays >= 0){
  tempDays -= 60;
  if (tempDays >= 0){
    days++;
  }
}
hours -= (days * 60);

//Final display message
document.write(seconds + " seconds is equal to: </br>");
document.write(days + " days </br>");
document.write(hours + " hours </br>");
document.write(minutes + " minutes </br>");
document.write(seconds + " seconds </br>");
document.write("Thank you for using WeexerTools");
