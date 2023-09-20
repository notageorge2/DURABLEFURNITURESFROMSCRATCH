window.onload = function(){
    var myLink = document.querySelectorAll(".view")
    var imageFolder = document.querySelector("title").innerHTML
    myLink.forEach(item => {
        console.log(item.id)
        item.addEventListener("click", ()=>{
            var selectedFurniture = item.id
            localStorage.setItem("theClickedProduct", selectedFurniture)
            localStorage.setItem("folderName", imageFolder)
            
        })
    });
}