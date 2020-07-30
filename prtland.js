var images = [
    "images/prt1.jpg",
    "images/prt2.jpg",
    "images/prt3.jpg",
    "images/prt5.jpg"

];
var currentIndex = 0;
var  img  =  document.querySelector('img');
var  next  =  document.getElementById('next-button');
var  prev  =  document.getElementById('prev-button');
var  change =  document.getElementById('btn-change');
var h1 = document.querySelector('h1');

change.onclick = function() {
    h1.classList.toggle('highlight');
}

var  incrementIndex  =   function() {   //console.log(currentIndex);
        
    currentIndex  =  currentIndex  +  1;    
    if  (currentIndex  >  images.length  -  1)  { currentIndex  =  0 }    
    return  currentIndex;

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