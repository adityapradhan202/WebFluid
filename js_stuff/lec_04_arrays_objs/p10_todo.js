

let todos = []

function display(todos){
    if(todos.length === 0){
        alert("Oppsie todo list is empty!");
        return;
    }

    let allTasks = "";
    todos.forEach((value) => {
        allTasks += (value + "\n");
    });

    alert(allTasks);
}

 // all the tasks will be stored here
while(true){

    const operation = window.prompt(`
        1 - Add task
        2 - Delete task
        3 - Update task
        4 - Clear to do list
        5 - Show all tasks
        6 - Exit!
        
        Enter operation:`);
    if(operation == 1){
        let task = window.prompt("Enter task:");
        todos.push(task);
        continue;
    }
    else if(operation == 2){
        let number = window.prompt("Enter the task number:");
        number = Number(number);
        todos.splice((number-1), 1);
        continue;
    }
    else if(operation == 3){
        let number = window.prompt("Enter the task number:");
        number = Number(number);
        newTask = window.prompt("Enter new task:");
        todos.splice(number-1, 1, newTask);
        continue;

    }
    else if(operation == 4){
        todos = [];
        continue;
    }
    else if(operation == 5){
        display(todos);
        continue;
    }
    else if(operation == 6){
        console.log("Thanks for using our todolist app!");
        break;
    }
    else{
        console.log("Invalid input!")
        break;
    }
}

