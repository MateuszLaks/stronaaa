document.addEventListener("DOMContentLoaded", function() {
    const images = [
        "csgo1.jpg",
        "csgo2.jpg",
        "csgo3.jpg",
        "csgo4.jpg",
        "csgo5.jpg"
    ];
    
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const mainImage = document.getElementById("randomImage");
    if (mainImage) {
        mainImage.src = randomImage;
        mainImage.alt = "Losowy obrazek CS:GO";
    }
});