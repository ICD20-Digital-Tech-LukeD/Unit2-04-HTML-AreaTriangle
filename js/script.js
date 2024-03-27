

document.getElementById("triangleForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
// this gets the values of length and width input fields
var height = parseFloat(document.getElementById("height").value);
var base = parseFloat(document.getElementById("base").value);

// used to calculate the area of the triangle
var area = 0.5 * height * base;

    // this displays the result on the webpage
    document.getElementById("result").innerHTML = "The area of the triangle is: " + area;
});
