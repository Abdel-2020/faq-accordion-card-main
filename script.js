
    //Find all nav-links and store them in "link". QuerySelectorAll stores them in an array format. 
    const link = document.querySelectorAll(".nav-title");


  //Create a for loop to iterate through each item in the array.
for(let i = 0; i < link.length; i++){

//Check if user has clicked the item
    link[i].addEventListener('click', e => {
        let text = document.getElementsByClassName("nav-text");
        text.item(i).style.display = "block";
    })
}
 
    //Iterate through each link and check if they've been clicked. Display the hidden text. 



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



    


