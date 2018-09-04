let el = null;
let listElements = [];

let container = document.getElementById('container');

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');

let item = document.getElementById('item');
let addElement = document.getElementById('addElement');

let messageElem = document.getElementById('message');

addElement.addEventListener('click', addItem);
itemList.addEventListener('click', actionItem);
item.addEventListener('input', validateInput);

validateInput();

function validateInput(){
	if(!item.value.replace(/\s/g, '').length) { 
        addElement.disabled = true; 
    } else { 
        addElement.disabled = false;
    }
}

function addMessage(){
	messageElem = document.getElementById('message');
	if(!messageElem){
		let message = document.createElement('h3');
		message.id = 'message';
		message.appendChild(document.createTextNode('Maximum item per list are created'));
		container.insertBefore(message, form);
		item .value = '';
		addElement.disabled = true; 
		item.disabled = true; 
	}
}

function addItem(e){
	let maxItem = 10;
	if (itemList.children.length < maxItem) {
		let newItem = document.getElementById('item').value;

		let li = document.createElement('li');
		li.className = 'column';
		li.setAttribute('draggable', 'true');		

		let span = document.createElement('span');
		span.className = 'text';
		span.appendChild(document.createTextNode(newItem));

		let check = document.createElement('i');
		check.className = 'material-icons unchecked';
		check.appendChild(document.createTextNode('check_box_outline_blank'));

		let deleteBtn = document.createElement('i');
		deleteBtn.className = 'material-icons delete';
		deleteBtn.appendChild(document.createTextNode('delete'));
		
		li.insertBefore(check, li.firstChild);
		li.appendChild(span);
		li.appendChild(deleteBtn);
		itemList.appendChild(li); 
		form.reset();
	} else {
		addMessage();
	}
	validateInput();
	listElements = document.getElementsByClassName('column');
	[].forEach.call(listElements, addListener);
	e.preventDefault();
}

function actionItem(e){
	let action = e.target.classList;
	if(action.contains('delete')){
		removeItem(e);
	} else if(action.contains('check') || action.contains('unchecked')) {
		checkItem(e);
	}
}

function removeItem(e){
	let zero = 0;
	let elements = document.getElementsByClassName('check');
	messageElem = document.getElementById('message');
	if(messageElem && elements.length > zero){
		messageElem. parentNode. removeChild(messageElem); 
		item.disabled = false; 
	}
	while (elements.length > zero) {
    elements[zero].parentNode.remove();
	} 
}

function checkItem(e){
	if(e.target.classList.contains('unchecked')){
		e.target.innerHTML = 'check_box';
		e.target.classList.add('check');
		e.target.classList.remove('unchecked');
	} else if(e.target.classList.contains('check')) {
		e.target.innerHTML = 'check_box_outline_blank';
		e.target.classList.add('unchecked');
		e.target.classList.remove('check');
	}
}

function dragStart(e){
  el = this;
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.outerHTML);
}

function dragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  this.classList.add('over');
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function dragLeave(e) {
  this.classList.remove('over');
}

function dropItem(e) {
  if (el !== this) {
    this.parentNode.removeChild(el);
    let currentElement = e.dataTransfer.getData('text/html');
    this.insertAdjacentHTML('beforebegin', currentElement);
    let prevElem = this.previousSibling;
    addListener(prevElem);
  }
  this.classList.remove('over');
  return false;
}

function addListener(elem){
  elem.addEventListener('dragstart', dragStart, false);
  elem.addEventListener('dragover', dragOver, false);
  elem.addEventListener('dragleave', dragLeave, false);
  elem.addEventListener('drop', dropItem, false);
}

