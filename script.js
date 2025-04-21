document.getElementById("title").innerHTML ="D.O.M"
document.getElementById("Home").innerHTML ="<p>Manipulation of the DOM is very interesting aspect of javascript <p>"
document.getElementById("content").style.color = "blue"
// changing the text of the heading 
const button = document.getElementById("changeHeading");
const heading = document.getElementById("heading");

button.addEventListener("click", function() {
    heading.textContent = "JAVASCRIPT DOM MANIPULATION -EVENT LISTENER";
    button.textContent = "You have clicked me!";
    button.style.backgroundColor = "green";
    // creating a new element 
    const newElement = document.createElement("h3");
    newElement.textContent = "Javascript is the brain of the web";
    document.body.appendChild(newElement);
});