 //Find all nav-title and store them in "link". QuerySelectorAll stores them in an array format. 
 const link = document.querySelectorAll(".nav-title");


 //Functions

 function showText() {


     //Create a for loop to iterate through each item in the array.
     for (let i = 0; i < link.length; i++) {

         //Check if user has clicked the item
         link[i].addEventListener('click', e => {
             //Find all nav-text elements and store them in "text". Like querySelectorAll this stores them in an Array format.
             let text = document.getElementsByClassName("nav-text");
             //Find all nav-title elements and store them in navTitle. 
             let navTitle = document.getElementsByClassName("nav-title");
             let navIcon = document.getElementsByClassName("nav-icon");


             //check if a link is already clicked to retract the item from the list. Or show the contents. 
             if (text[i].style.display == "block") {
                 text[i].style.display = 'none';
                 navTitle.item(i).style.fontWeight = "400";
             } else {
                 text[i].style.display = 'block';
                 //Changes the font weight of navTitle to 700.
                 navTitle.item(i).style.fontWeight = "700";
             }



             navIcon[i].classList.toggle("nav-icon-toggle");
             console.log(e);
         })
     }
 }


 function moveBox() {
     for (let i = 0; i < link.length; i++) {
         link[i].addEventListener('mouseover', e => {
             let box = document.querySelector(".hero-box");
             box.classList.toggle("hero-box-toggle");
             console.log(e);
         })
     }
 }

 function reverseBox() {
     for (let i = 0; i < link.length; i++) {
         link[i].addEventListener('mouseleave', e => {
             let box = document.querySelector(".hero-box");
             box.classList.toggle("hero-box-toggle");
             console.log(e);
         })
     }
 }

 showText();
 moveBox();
 reverseBox();





































 /*
     for (let i = 0; i < link.length; i++) {
         
         link.item(i).onclick = function() {
             let text = document.getElementsByClassName("nav-text");
             text.item(i).style.display = "block";
         }

     }

     
 /*
     for (let i = 0; i < link.length; i++) {

         link.item(i).addEventListener("click", function(){
             console.log("clicked");
             let text = document.getElementsByClassName("nav-text");
            
             return  text.item(i).style.display = "block";
         });
     }
     
 */