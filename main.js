

  let task = document.querySelector("#taskinput")
  
  let taskbtn = document.querySelector("#addtaskbtn")
  const tasks = []
  
  taskbtn.addEventListener("click", function(e){
    e.preventDefault()
    let taskval = task.value
    tasks.push(taskval)  
    localStorage.setItem("tasks", JSON.stringify(tasks))
    task.value = ""
  })

let storedTasks = JSON.parse(localStorage.getItem("tasks"));

let showtaskbtn = document.querySelector("#showtaskbtn")

showtaskbtn.addEventListener("click", function(e){
  e.preventDefault()
  console.log(storedTasks);
  
})
