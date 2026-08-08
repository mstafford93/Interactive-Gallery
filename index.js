function addImage(){
    //HTML elements
    const imageInput = document.querySelector("input"); //Can't access value in getElementById
    const addImageBtn = document.getElementById("addImageBtn");
    const imageDisplay = document.getElementById("imageDisplay");

    if (imageInput.value){
        //Create new element for image
        const newImage = imageDisplay.createElement("div");
        newImage.classList.add("newImage");

        //Accessing the input value
        newImage.innerHTML = `<img src = "${imageInput.value}".jpg>`;

        //Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent("Remove");
        removeBtn.classList.add("removeBtn");
        removeBtn.onclick(() => {
            imageDisplay.removeChild("newImage");
        });

    }
}