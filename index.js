function addImage(){
    //HTML elements
    const imageInput = document.querySelector("input").value;
    const addImageBtn = document.getElementById("addImageBtn");
    const imageDisplay = document.getElementById("imageDisplay");

    if (imageInput){

        //Create new element for image
        const newImage = document.createElement("div");
        newImage.classList.add("newImage");

        //Accessing the newImage html
        newImage.innerHTML = `<img src = "${imageInput}">`;

        //Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add("removeBtn");
        removeBtn.onclick = () => imageDisplay.removeChild(newImage);

        //Append image and button
        imageDisplay.appendChild(newImage);
        newImage.appendChild(removeBtn);

    } else {
        alert("Please enter image name");
    };
};

document.getElementById("addImageBtn").addEventListener("click", addImage);