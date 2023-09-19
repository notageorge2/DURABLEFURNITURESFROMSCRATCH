
    
    var productDescription = document.querySelector(".product-description");
    var furnitureToDisplay =  localStorage.getItem("theClickedProduct");
    var imageFolder = localStorage.getItem("folderName")
   
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


readTextFile(`productdescription/${furnitureToDisplay}.txt`); 



   
    

    console.log(imageFolder)
    var allImageOnPage = document.querySelectorAll(".furnitureImagesLinkedToProductPage");
    allImageOnPage.forEach(item =>{
            item.src = "images\\" + imageFolder + "\\" + furnitureToDisplay + ".jpg"
            console.log(item)

    })

    


