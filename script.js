function upDate(show_picture) {
    const show_img = document.getElementById("show_img");
    show_img.innerHTML = show_picture.alt;
    show_img.style.backgroundImage = `url('${show_picture.src}')`;
    show_img.style.backgroundSize = "cover";
    show_img.style.backgroundPosition = "center";
}

function undo() {
    const show_img = document.getElementById("show_img");
    show_img.innerHTML = "Hover over an image below!!";
    show_img.style.backgroundImage = "none";
}