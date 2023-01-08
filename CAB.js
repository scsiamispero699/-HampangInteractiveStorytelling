const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

draggableElements.forEach(elem => {
  elem.addEventListener("dragstart", dragStart);
});

droppableElements.forEach(elem => {
  elem.addEventListener("dragenter", dragEnter);
  elem.addEventListener("dragover", dragOver); 
  elem.addEventListener("dragleave", dragLeave); 
  elem.addEventListener("drop", drop); 
});

function dragStart(event) {
  event.dataTransfer.setData("text", event.target.id);
}
function dragEnter(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.add("droppable-hover");
  }
}
function dragOver(event) {
  if(!event.target.classList.contains("dropped")) {
    event.preventDefault(); 
  }
}
function dragLeave(event) {
  if(!event.target.classList.contains("dropped")) {
    event.target.classList.remove("droppable-hover");
  }
}
function WET() {
    setTimeout(function(){ 
      window.location.href = "WET.html";
}, 10);
}

function SCORE(){
    document.getElementById("CAB").style.visibility = "hidden";
    document.getElementById("SCORE").style.visibility = "visible";
}; 

function drop(event) {
  var c = new Audio('ArrangeTheLetters/letters_audio/C.mp3');
  var a = new Audio('ArrangeTheLetters/letters_audio/A.mp3');
  var b = new Audio('ArrangeTheLetters/letters_audio/B.mp3');
  var cab = new Audio('ArrangeTheLetters/audio/cab.mp3');
  var fantastic = new Audio('GAMESSTORY/TM/fantastic.mp3');

  event.preventDefault();
  event.target.classList.remove("droppable-hover");
  const draggableElementData = event.dataTransfer.getData("text"); 
  const droppableElementData = event.target.getAttribute("data-draggable-id");
  const isCorrectMatching = draggableElementData === droppableElementData;

  if(isCorrectMatching) {
    const draggableElement = document.getElementById(draggableElementData);
    event.target.classList.add("dropped");
    draggableElement.classList.add("dropped");
    draggableElement.setAttribute("draggable", "false");
    event.target.insertAdjacentHTML("afterbegin", `<i class="fa-${draggableElementData}"></i>`);
    var audio = new Audio('GAMESSTORY/TM/correct.mp3');
    audio.play();

    if(draggableElementData == "c") {
      setTimeout(function() {c.play();}, 1500);
      }else if (draggableElementData == "a"){
        setTimeout(function() {a.play();}, 1500);
      }else if (draggableElementData == "b"){
        setTimeout(function() {b.play();}, 1500);
        setTimeout(function() {cab.play();}, 4900);
        setTimeout(function() {fantastic.play();}, 5900);
        setTimeout(function() {SCORE();}, 5800);
      }
  } 
  else {
    var audio = new Audio('GAMESSTORY/TM/wrong.mp3');
    audio.play();
  }
 
}