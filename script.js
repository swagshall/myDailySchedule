// console.log("in script")

//get curr date for header
var currentTime=moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentTime);

//call to function that changes thecolors of the textares
colorHour(currHour, hr)


//change color based on hr
var currHour=moment().hours();
var hr= $('col-sm-10 description');

// timblck.each(function() {
//     var hr=parseInt($(this).attr('id'))
   
//console.log(currHour)
function colorHour(currHour, hr)
{
    if(hr>currHour){
    //change color to grey
    $(this).css("color", "blue");
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
// })


//save data via local storage
var sv = $('.saveBtn');

sv.on('click', function (event) {
    console.log("save btn clicked")
    event.preventDefault();
    var txt = $(this).siblings('.col-sm-10').val().replace(/['"]+/g, '');
    var txtPar = $(this).parent().attr('id');
    localStorage.setItem(txtPar, JSON.stringify(txt));
    saveText();
}) 







function saveText(){
     for (var i = 1; i <13; i++) {
           $("#hour" + i + 'textarea' ).val(localStorage.getItem("hour" + i));

        }

//     }
// }




//     var dat=$('textarea')
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

}