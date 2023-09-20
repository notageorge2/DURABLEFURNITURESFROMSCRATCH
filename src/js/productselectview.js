
    
    var productDescription = document.querySelector(".product-description");
    var furnitureToDisplay =  localStorage.getItem("theClickedProduct");
    var imageFolder = localStorage.getItem("folderName");
    var heading = document.querySelector(".heading");
    var downloadButton = document.getElementById("download-description-button");
    console.log(furnitureToDisplay);
    console.log(imageFolder);
   
    function readTextFile(file) { 
    var rawFile = new XMLHttpRequest(); 
    rawFile.open("GET", file, false); 
    rawFile.onreadystatechange = function () { 
        if (rawFile.readyState === 4) { 
        if (rawFile.status === 200 || rawFile.status == 0) { 
            var allText = rawFile.responseText; 
            productDescription.innerHTML = allText; 
        } 
        } 
    } 
    rawFile.send(null); 
    } 


//setting the value of the innerHtml of the heading;
heading.innerHTML = `${furnitureToDisplay}`

//calling the function to insert the txt file of the description the tag with the description tag
readTextFile(`productdescription/${furnitureToDisplay}.txt`); 



//configuring the download button too download the details description of the page on click   
    downloadButton.addEventListener("click", ()=>{

        downloadButton.firstChild.href = `productdescription/${furnitureToDisplay}.txt`
        downloadButton.firstChild.download = "productdetails"

    })

    

    //adding the selected image to the src of the img tags in the view page
    var allImageOnPage = document.querySelectorAll(".furnitureImagesLinkedToProductPage");
    allImageOnPage.forEach(item =>{
            item.src = "images\\" + imageFolder + "\\" + furnitureToDisplay + ".jpg"
            console.log(item)
            
           

    })


    

    


