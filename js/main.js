   document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".accordion-header");
  headers.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    });
  });
 document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "images/fimage1.jpg",
    "images/fimage2.jpg",
    "images/fimage3.jpg",
    "images/fimage4.jpg"
  ];
  let currentIndex = 0;
  const imgElement = document.getElementById("myImages");
  function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.style.opacity = 0;
    setTimeout(() => {
      imgElement.src = images[currentIndex];
      imgElement.style.opacity = 1;
    }, 300);
  }
if (imgElement) {
  imgElement.addEventListener("click", changeImage);
  setInterval(changeImage, 2000);
}
function showMessage() {
  console.info('This message is shown after 3 seconds');
}

setTimeout(showMessage, 3000);
});
   });
