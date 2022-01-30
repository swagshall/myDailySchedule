// console.log("in script")

//get curr date for header
var currentTime=moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentTime);



//change color based on hr
var currHour=moment().hours();
var hr= $('time-block');

console.log(currHour)
colorTime(currHour);

function colorTime(currHour) {
for(var i=0; i<24; i++){
if(hr>currHour){
    //change color to grey
    $(this).css("color", "grey");
}
else if (hr<currHour){
    //change color to red 
    $(this).css("color", "red");
}
else if (hr=== currHour){
    //change color to green
    $(this).css("color", "green");
}
}
}


//save data via local storage
var sv = $('saveBtn');

sv.on('click', function (event) {
    event.preventDefault();
    // var dat=document.querySelectorAll('time-block')
//local storage to save data entered 
$('#hour9 textarea').val(localStorage.getItem('hour9'));
$('#hour10 textarea').val(localStorage.getItem('hour10'));
$('#hour11 textarea').val(localStorage.getItem('hour11'));
$('#hour12 textarea').val(localStorage.getItem('hour12'));
$('#hour1 textarea').val(localStorage.getItem('hour1'));
$('#hour2 textarea').val(localStorage.getItem('hour2'));
$('#hour3 textarea').val(localStorage.getItem('hour3'));
$('#hour4 textarea').val(localStorage.getItem('hour4'));
$('#hour5 textarea').val(localStorage.getItem('hour5'));
});
