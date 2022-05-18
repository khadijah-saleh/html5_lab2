



    var inProg = document.getElementById("inProgress")
    var text = document.getElementById('textVal')
    var p = document.createElement("p")

function add()
{
  
   
    p.innerText = text.value
       inProg.appendChild(p)

}


  p.setAttribute("draggable", "true");
  p.setAttribute("id", 1);
  p.addEventListener("dragstart", drag)


  function drag(e)
  {
    e.dataTransfer.setData("text", this.id);

  };

// // // 3 - each box feel drag event on it
let boxs = document.getElementsByClassName("tasksSection");

for (let i = 0; i < boxs.length; i++) {
  boxs[i].addEventListener("dragover", allowDrop);
  boxs[i].addEventListener("drop", drop);
}


function allowDrop(e) {
  e.preventDefault();
}


function drop(e) {
  // ev.preventDefault();
  var data = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(data));

  }



