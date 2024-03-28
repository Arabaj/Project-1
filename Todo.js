let todo = [];
let req = prompt("Enter your request");

while(true) {
  if(req=="quit"){
    console.log("quitting app");
    break;
  }

  if(req=="list"){
    console.log("____________");
    for(let i=0;i<todo.length;i++){
      console.log(i,todo[i]);
    }
    console.log("____________");
  }else if(req=="add"){
    let task= prompt("Enter task you want to add");
    todo.push(task);
    console.log("task added");
  }else if(req=="delete"){
    let idx=prompt("please enter the task index");
    todo.splice(idx,1);
    console.log("Task deleted");
  }else{
    console.log("Wrong request");
  }
  req = prompt("Enter your request");
}
