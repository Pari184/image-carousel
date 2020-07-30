var images = [
    "images/ferry.jpg",
    "images/island.jpg",
    "images/palace.jpg",
    "images/pier.jpg"

];
var currentIndex = 0;
var  img  =  document.querySelector('img');
var  next  =  document.getElementById('next-button');
var  prev  =  document.getElementById('prev-button');

var  incrementIndex  =   function() {   //console.log(currentIndex);
        
    currentIndex  =  currentIndex  +  1;    
    if  (currentIndex  >  images.length  -  1)  { currentIndex  =  0 }    
    return  currentIndex;
    alert("hi")
}

var  decrementIndex  =   function() {   //console.log(currentIndex);
        
    currentIndex  =  currentIndex  -  1;    
    if  (currentIndex  <  0)  { currentIndex  =  images.length  -  1 }    
    return  currentIndex;
}
next.onclick  =   function() {  
    img.setAttribute('src',  images[incrementIndex(currentIndex)]);  
}

prev.onclick  =   function() {  
    img.setAttribute('src',  images[decrementIndex(currentIndex)]);  
}
var randomColor = function() {
    var rvalue = function() {
        return Math.round(Math.random() * 255);
    }

    return 'rgb(' + rvalue() + "," + rvalue() + "," + rvalue() + ")";
}

// get button element from DOM
var button = document.getElementById("bg-button");
var body = document.querySelector('body');

// create event listener to change background color on button click
button.onclick = function() {
    body.style.backgroundColor = randomColor();
}