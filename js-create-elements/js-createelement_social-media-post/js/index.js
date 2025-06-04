console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newArticle = document.createElement("article");
newArticle.classList.add("post");

const newP = document.createElement("p");
newP.classList.add("post__content");
newP.textContent =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.";

const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");

const newUserName = document.createElement("span");
newUserName.classList.add("post__username");
newUserName.textContent = "@Michel";

const newButton = document.createElement("button");
newButton.classList.add("post__button");
newButton.textContent = " ♥ Like";
newButton.setAttribute("data-js", "like-button");
newButton.type = "button";

newButton.addEventListener("click", handleLikeButtonClick);

newFooter.append(newUserName, newButton);
newArticle.append(newP, newFooter);

document.body.append(newArticle);
