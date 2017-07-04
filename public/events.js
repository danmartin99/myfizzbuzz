//events.js
function myFunc(i)
{
    if (i % 15 == 0)
        return("FizzBuzz");
    else if (i % 3 == 0)
        return("Fizz");
    else if (i % 5 == 0)
        return("Buzz");
    else
        return(i);
}



document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("button").addEventListener("click", function()
	{
		for (count = 1; count < 200; count++) { 
    // console.log(myFunc(count))
    document.writeln(myFunc(count));
    document.write("<br>");
    }
	})
})

