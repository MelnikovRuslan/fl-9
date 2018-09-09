const rootNode = document.getElementById('root');

	let container = document.createElement('div');
	container.className = 'container';

	let head = document.createElement('h2');
	head.className = 'title';
	
	let addButton = document.createElement('button');
	addButton.className = 'addTask';
	addButton.appendChild(document.createTextNode('Add new task')); 

	let cancle = document.createElement('button');
	cancle.className = 'cancle';
	cancle.appendChild(document.createTextNode('Cancle')); 

	let saveChange = document.createElement('button');
	saveChange.className = 'saveChange';
	saveChange.appendChild(document.createTextNode('Save Change')); 

	let changeItem = document.createElement('button');
	changeItem.className = 'changeItem';
	changeItem.appendChild(document.createTextNode('Save Change'));

	let taskInput = document.createElement('input');
	taskInput.className = 'taskInput';	

	let ul = document.createElement('ul');
	ul.id = 'taskList';	


const pages = {
 mainPage(){
  while (container.firstChild) {
   container.removeChild(container.firstChild);
  }
	head.textContent = 'Simple TODO application';
	container.appendChild(head);
	container.appendChild(addButton);
	container.appendChild(ul);

	addButton.addEventListener('click', function(){
		window.location.hash = '/add';
	});
	return container;
 },
 addPage(){
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
	head.textContent = 'Add Task';
	container.appendChild(head);
	container.appendChild(taskInput);
	container.appendChild(cancle);
	container.appendChild(saveChange);
		
	saveChange.addEventListener('click', function(){
		window.location.hash = '/main'
	});
	cancle.addEventListener('click', function(){
		window.location.hash = '/main';
	});
	return container;
  },
 modifyPage(){
   while (container.firstChild) {
    container.removeChild(container.firstChild);
   }
	head.textContent = 'Change Task';
	container.appendChild(head);
	container.appendChild(taskInput);
	container.appendChild(cancle);
	container.appendChild(changeItem);

	changeItem.addEventListener('click', function(){
		window.location.hash = '/main';
	});
	cancle.addEventListener('click', function(){
		window.location.hash = '/main';
	});
	return container;
   }
}

container.addEventListener('click', showPage);
rootNode.appendChild(pages.mainPage());
showList();

function showPage (e){
	let action = e.target.classList; 
	if(action.contains('addTask')){
		rootNode.appendChild(pages.addPage());
	} else if(action.contains('saveChange')) {
		rootNode.appendChild(pages.mainPage());
		saveTasks(taskInput.value)
	} else if(action.contains('text')){
		rootNode.appendChild(pages.modifyPage());
		changeTask(e);
	} else if(action.contains('changeItem')){
		rootNode.appendChild(pages.mainPage());
		showList();
	}else if (action.contains('cancle')){
		rootNode.appendChild(pages.mainPage());
	}
}

function saveTasks(todo){
	if(!todo.replace(/\s/g, '').length){
		alert('Incorect Data');
		return false;
	}
 let task = {
	isDone:false,
	id:Date.now(),
    description:todo
 }
 if(localStorage.getItem('tasks') === null){
    let tasks = []; 
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
 }else{
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
 }
  taskInput.value = '';
  showList();
}

function changeTask(e){
	let parentID = e.target.parentElement.id;
	window.location.hash = `#/modify/:${parentID}`;
	let tasks = JSON.parse(localStorage.getItem('tasks'));
	taskInput.value = e.target.innerText;
	changeItem.addEventListener('click', function(){
		for(let i = 0; i < tasks.length; i++){
			if(Number(parentID) === tasks[i].id){
				tasks[i].description = taskInput.value;
			}
		}
		localStorage.setItem('tasks', JSON.stringify(tasks));
	});
	taskInput.value = '';
}

function showList(){
	let listItem = document.getElementById('taskList');
	let tasks = JSON.parse(localStorage.getItem('tasks')); 
	listItem.innerHTML = '';
	for(let i = 0; i < tasks.length; i++){
		let li = document.createElement('li');
		li.className = 'column';
		li.id = tasks[i].id;

		let span = document.createElement('span');
		span.className = 'text';
		span.appendChild(document.createTextNode(tasks[i].description));

		let check = document.createElement('img');
		check.className = 'check';
		if(tasks[i].isDone === false){
			check.src = './assets/img/todo-s.png';
		}else{
			check.src = './assets/img/done-s.png';
			span.style.backgroundColor = 'grey';
		}
		check.addEventListener('click', checkItem);

		let deleteBtn = document.createElement('img');
		deleteBtn.className = 'delete';
		deleteBtn.src = './assets/img/remove-s.jpg';
		deleteBtn.addEventListener('click', removeItem);

		li.insertBefore(check, li.firstChild);
		li.appendChild(span);
		li.appendChild(deleteBtn);
		listItem.appendChild(li); 
	}
}

function checkItem(e){
	let tasks = JSON.parse(localStorage.getItem('tasks'));
	let parentID = e.target.parentElement.id;
	for(let i = 0; i < tasks.length; i++){
		if(Number(parentID) === tasks[i].id && tasks[i].isDone === false){
			e.target.src = './assets/img/done-s.png';
			tasks[i].isDone = true;
			tasks.push(tasks[i]);
			tasks.splice(i, 1);
			localStorage.setItem('tasks', JSON.stringify(tasks));
			break;
		} else if(Number(parentID) === tasks[i].id && tasks[i].isDone === true){
			e.target.src = './assets/img/todo-s.png';
			tasks[i].isDone = false;
			localStorage.setItem('tasks', JSON.stringify(tasks));
			break;
		}
	}
	showList();
}

function removeItem (e){
	let tasks = JSON.parse(localStorage.getItem('tasks'));
	let parentID = e.target.parentElement.id;
	for(let i = 0; i < tasks.length; i++){
		if(tasks[i].id === Number(parentID)){
			tasks.splice(i, 1);
			break;
		}
	}
	localStorage.setItem('tasks', JSON.stringify(tasks));
	e.target.parentNode.remove(); 
}