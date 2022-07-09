document.addEventListener('DOMContentLoaded', (event) => {
    //the event occurred
    const images = document.querySelectorAll(".grid-photo");
    const imagesArr = Array.from(images); 
    console.log(imagesArr);
    let imgSrc;

    images.forEach((img) => {
        img.addEventListener("click", (e) => {
            imgSrc = e.target.src; 
            
            imgModal(imgSrc);
        })
    })

    let imgModal = (src) => {

    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    modal.addEventListener("click", function(){
        this.style.display = "none";
    })
    //add the modal to the main section or the parent element
    document.querySelector(".modal-content").append(modal);
    //adding image to modal
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    //creating the close button
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fa fa-times fa-3x closeBtn");
    //close function
    closeBtn.onclick = () => {
        modal.remove();
    };
    modal.append(newImage, closeBtn);
};
  })


