const memeForm = document.querySelector("#meme-form");
const imageURL = document.querySelector("#image-url");
const topText = document.querySelector("#top-text");
const bottomText = document.querySelector("#bottom-text");
const submitButton = document.querySelector("#submit");
const imageContainer = document.querySelector(".container");

//Start listening for a click on the "Add Meme" button
submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  addNewMeme();
})

//When the button is clicked this function will execute
function addNewMeme() {
  //Create a container to hold the image and its text
  const imageContainer = document.createElement("div");
  const newMeme = document.createElement("img");
  const bottomTextElement = document.createElement("div")
  const topTextElement = document.createElement("div")
  
  imageContainer.classList.add("container")
  bottomTextElement.classList.add("bottom-center");
  topTextElement.classList.add("top-center")

  bottomTextElement.innerText = bottomText.value
  topTextElement.innerText = topText.value

  newMeme.setAttribute("src",imageURL.value);
  imageContainer.append(newMeme);
  imageContainer.append(topTextElement);
  imageContainer.append(bottomTextElement);
  document.body.append(imageContainer);
  bottomText.value = '';
  topText.value = '';
  imageURL.value = '';

  //Adding event listeners
  //Keeps track of mouse hovering over the image, mouse leaving the image
  //and mouse clicking on the image
  imageContainer.addEventListener("mouseover", onImageEnter);
  imageContainer.addEventListener("mouseout", onImageExit);
  imageContainer.addEventListener("click", onImageClick);
}

//When the mouse begins to hover over the image we need to create the X icon
//and add it to the container
function onImageEnter(e) {
  const hoverIcon = document.createElement("div");
  hoverIcon.setAttribute("id","hover-icon");
  hoverIcon.innerHTML = "&#10006";
  e.target.parentElement.append(hoverIcon);
}

//When the mouse leaves the image we need to remove the X icon
function onImageExit(e) {
  document.querySelector("#hover-icon").remove();
}

//When a mouse click happens remove the entire container
function onImageClick(e) {
  e.target.parentElement.remove();
}