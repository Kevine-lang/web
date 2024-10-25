// JavaScript for Image Slideshow
let albumImages = ["album1.jpg", "album2.jpg", "album3.jpg"]; // Image paths for albums
let currentIndex = 0;

function changeAlbumCover() {
    const albumCover = document.getElementById("album-cover");
    albumCover.style.opacity = 0; // Fade-out effect

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % albumImages.length; // Cycle through images
        albumCover.src = albumImages[currentIndex];
        albumCover.style.opacity = 1; // Fade-in effect
    }, 500); // 500ms matches CSS transition
}

setInterval(changeAlbumCover, 3000); // Change album cover every 3 seconds

// JavaScript for Smooth Scrolling for Navbar Links
document.querySelectorAll("header nav a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
        });
    });
});

// JavaScript for Contact Form Validation
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
    } else if (!/^\S+@\S+\.\S+$/.test(email)) { // Simple email validation
        alert("Please enter a valid email address.");
    } else {
        alert("Thank you for reaching out!");
        this.submit(); // If everything is valid, submit the form
    }
});
