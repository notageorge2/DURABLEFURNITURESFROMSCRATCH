window.onload = function(){
    var myLink = document.querySelectorAll(".view")
    var imageFolder = document.querySelector("title").innerHTML
    console.log( page );
    myLink.forEach(item => {
        item.addEventListener("click", ()=>{
            var selectedFurniture = item.id
            localStorage.setItem("theClickedProduct", selectedFurniture)
            localStorage.setItem("folderName", imageFolder)
            
        })
    });
}