

//Find all nav-title and store them in "link". QuerySelectorAll stores them in an array format. 
const link = document.querySelectorAll(".nav-title");
//Create a for loop to iterate through each item in the array.
for (let i = 0; i < link.length; i++) {

    //Check if user has clicked the item
    link[i].addEventListener('click', e => {
        //Find all nav-text elements and store them in "text". Like querySelectorAll this stores them in an Array format.
        //Find all nav-title elements and store them in navTitle. 
        let text = document.getElementsByClassName("nav-text");
        let navTitle = document.getElementsByClassName("nav-title");
        //Changes the display from "none" to "block" which should reveal the text.
        //Changes the font weight of navTitle to 700.
        text.item(i).style.display = "block";
        navTitle.item(i).style.fontWeight="700";
        console.log(e);
    })
}

for (let i = 0; i < link.length; i++) {

    
}





























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