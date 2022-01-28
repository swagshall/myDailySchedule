// console.log("in script")


var currentTime=moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentTime);


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
