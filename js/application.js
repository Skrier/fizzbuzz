$(document).ready(function (){
    
    var fizz = "<li> FIZZ </li>";
	var buzz = "<li> BUZZ </li>";
	var fizzBuzz = "<li>FIZZBUZZ</li>";
	var noFizzBuzz = "<li>" + i + "</li>";
    
    var fizzbuzz = function (inputNumber){
	     
	     var inputNumber = $(".input").val();
	     
	        for (i = 1; i <= inputNumber; i++) {
	    
	          if (i % 3 == 0 && i % 5 == 0) {
	          	$("#result").append(fizzBuzz)
	          }
	          else if (i % 3 == 0) {
	          	$("#result").append(fizz)
	          }
	          else if (i % 5 == 0) {
	          	$("#result").append(buzz)
	          }
	          else {$("#result").append(noFizzBuzz)
	          };
	                          
	        };

    };

        $("#inputNumber").mousedown(function () {
        	fizzbuzz();
        });

        $(".input").keydown(function (pressenter){
	        if(pressenter.keyCode == 13) {
	        fizzbuzz();
	        };
        });

        $("#clearResult").mousedown(function () {
        	$("li").remove();
        });



});







   
