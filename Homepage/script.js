
function colorText() {
    var p = document.getElementById('testing');
    p.style.color = 'blue';
}

//function removeColor () {
 //   var p = document.getElementById('testing');
 //   p.remove = colorText;
//}

document.getElementById('mybutton').addEventListener('click',colorText); 

document.getElementById('stopButton').addEventListener('click', function() {
    document.getElementById('mybutton').removeEventListener('click', colorText);
});