
let imageVar = document.getElementById("motion");

let imageArrey = ["slide1.png", "slide2.png", "slide3.png", "slide4.png", "slide5.png"]

let imageIndex = 0;

function slideshow() {
imageVar.setAttribute('src', imageArrey[imageIndex]);
imageIndex++;

if(imageIndex >= imageArrey.length) {
				imageIndex = 0
}

}

setInterval(slideshow, 3000)
