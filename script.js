

var inProg = document.getElementById("inProgress")


function add()
{
  
    // var t = document.createTextNode
    // p.setAttribute("draggable", "true");
    var text = document.getElementById('textVal')
    var p = document.createElement("p")
    

    p.innerText = text.value
       inProg.appendChild(p)

       
let items = document.getElementsByTagName("p");
let count = 0;
for (let i = 0; i < items.length; i++) {
  items[i].setAttribute("id", count++);
  items[i].setAttribute("draggable", "true");
  items[i].addEventListener("dragstart", drag)
}

 
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

}



