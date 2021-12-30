
    //Find all nav-links and store them in "link"
    let link = document.getElementsByClassName("nav-link");

    //Iterate through each link and check if they've been clicked. Display the hidden text. 
    

    for (let i = 0; i < link.length; i++) {

        link.item(i).addEventListener("click", function(){
            console.log("clicked");
            let text = document.getElementsByClassName("nav-text");
            text.item(i).style.display = "block";
        });
    }
    

    


