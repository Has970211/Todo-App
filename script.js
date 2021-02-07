const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');
const delBtn = document.getElementById('delete');

const todoList = JSON.parse(localStorage.getItem("todoList"));

if (todoList){
    todoList.forEach((todoLE)=>{
        addTodo(todoLE);

    });
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    addTodo();
});
    
    
function addTodo(todoLE){  
    let todo = input.value;
    let status = false;

    if (todoLE){
        todo=todoLE.text;
        status = todoLE.completed;
        console.log(todoLE.text);
        console.log(todoLE.completed);
    }

    if(todo){
        const todoEI = document.createElement('li');
        todoEI.classList.add('todoEI');
        
        const btn1 = document.createElement('button');
        btn1.classList.add('delete');

        const btn2 = document.createElement('button');
        btn2.classList.add('done');

        
        if (status){
            todoEI.classList.add("completed");
        }
        
        todoEI.innerText = todo;
        
        btn1.innerHTML=`
        <i class="far fa-trash-alt"></i>
        `;

        btn2.innerHTML=`
        <i class="fal fa-check-circle"></i>
        `;

        btn2.addEventListener('click',(a)=>{
            
            todoEI.classList.toggle('completed');
            //console.log('okay');
            updateLS();
        });

        btn1.addEventListener('click',()=>{
            todoEI.remove();
            updateLS();
        });
        todoEI.appendChild(btn2);
        todoEI.appendChild(btn1);
        todos.appendChild(todoEI);
        
        input.value='';
        updateLS();
        
    }else{

    };
} 

function updateLS() {
    const todosEl = document.querySelectorAll("li");

    const todos = [];

    todosEl.forEach((todoEl) => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed"),
        });
    });

    localStorage.setItem("todoList", JSON.stringify(todos));
}




/*const addBtn = document.querySelector('.add');
addBtn.addEventListener('click',()=>{
    addNewNote();

})

/*function addNotes(){
    const noteContainer = document.createElement('div');
    
    
    
    //noteContainer.classList.add('note');
    noteContainer.innerHTML=
        `<div class="nav">
            <button class="edit"><i class="fa fa-pencil" aria-hidden="true"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>    
        </div>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>`
    

    const editBtn = noteContainer.querySelector('.edit');
    const deleteBtn = noteContainer.getElementsByClassName('delete');
    const textarea = noteContainer.getElementsByTagName('textarea');

    

    textarea.addEventListener('input',(e)=>{
        const { value } = e.target;
        main.innerHTML = marked(value);
    })

};

function addNewNote() {
    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
        <div class="notes">
            <div class="tools">
                <button class="edit"><i class="fas fa-edit"></i></button>
                <button class="delete"><i class="fas fa-trash-alt"></i></button>
            </div>
            <div class="main ></div>
            <textarea></textarea>
        </div>
    `;

    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");
    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");
    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    });

    deleteBtn.addEventListener("click", () => {
        note.remove();
    });
    textArea.addEventListener("input", (e) => {
        const { value } = e.target;

        main.innerHTML = marked(value);    
    });
    document.body.appendChild(note);
}*/






