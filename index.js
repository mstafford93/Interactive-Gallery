function addImage(){
    //HTML elements
    const imageInput = document.querySelector("input").value; //Can't access value in getElementById
    const addImageBtn = document.getElementById("addImageBtn");
    const imageDisplay = document.getElementById("imageDisplay");

    if (imageInput){

        //Create new element for image
        const newImage = document.createElement("div");
        newImage.classList.add("newImage");

        //Accessing the input value
        newImage.innerHTML = `<img src = "${imageInput}.jpg">`;

        //Create remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add("removeBtn");
        removeBtn.onclick = () => imageDisplay.removeChild("newImage");

        //Append image and button
        imageDisplay.appendChild(newImage);
        imageDisplay.appendChild(removeBtn);

    } else {
        alert("Please enter image name");
    };
};

document.getElementById("addImageBtn").addEventListener("click", addImage);