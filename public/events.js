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
//
// $(document).ready(function() {
//   $('#button').on('click',function(){
//     alert('clicked');
//   });
// });

  // document.addEventListener("DOMContentLoaded", function() {
  //   document.getElementById('button').addEventListener("click", function(){
  //      alert("yay!, got it working");
  //   })
  // })


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("button").addEventListener("click", function()
	{
		for (count = 1; count < 100; count++) { 
    // console.log(myFunc(count))
    document.writeln(myFunc(count));
    document.write("<br>");
}
		
		// alert('Yah! Got it working');
	})
})

// $ (document).ready(function() {
//   var number = 1;
//   $('#button').on('click', function() {
//     number++;
//     alert(number);
//   });
//   $('button').off('click');
// });


// http://javascriptissexy.com/understand-javascript-closuers-with-ease
