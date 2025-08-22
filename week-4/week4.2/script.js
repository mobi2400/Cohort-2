function addTodo(){
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    // this is the ugly way
    // document.getElementById("container").innerHTML += `<div>
    // <h3>${title}</h3>
    // <p>${description}</p>
    // <button>Mark as done</button>
    // </div>`

    // this is the better way but still lengthy

    // const mainDiv = document.createElement("div");
    // const outerDiv = document.createElement("div");
    // const innerDiv = document.createElement("div");
    // const button = document.createElement("button");
    // outerDiv.innerHTML = title;
    // innerDiv.innerHTML = description;
    // button.innerHTML = "Mark as done";
    // mainDiv.appendChild(outerDiv);
    // mainDiv.appendChild(innerDiv);
    // mainDiv.appendChild(button);
    // document.getElementById("container").appendChild(mainDiv);

  // this is the best way
    const parent = document.getElementById("container");
    parent.appendChild(createChild(title, description, button,globalId++));
    console.log(title, description); 
}




// harkirat approach
 let globalId = 1;

    function markAsDone(todoId) {
      const parent = document.getElementById(todoId);
      parent.children[2].innerHTML = "Done!"
    }

    function createChild(title, description, id) {
      const child = document.createElement("div");
      const firstGrandParent = document.createElement("div");
      firstGrandParent.innerHTML = title;
      const secondGrandParent = document.createElement("div");
      secondGrandParent.innerHTML = description;
      const thirdGrandParent = document.createElement("button");
      thirdGrandParent.innerHTML = "Mark as done";
      thirdGrandParent.setAttribute("onclick", `markAsDone(${id})`);
      child.appendChild(firstGrandParent);
      child.appendChild(secondGrandParent);    
      child.appendChild(thirdGrandParent)
      child.setAttribute("id", id);
      return child;
    }
    function addTodo() {
      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      const parent = document.getElementById("todos");

      parent.appendChild(createChild(title, description, globalId++));
    }