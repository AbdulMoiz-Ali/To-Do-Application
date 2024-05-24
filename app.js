let input;
let editInputField;
let paradiv;
let editButton;
let doblesaver;
function btnmain() {
    input = document.getElementById('maininp').value;
    if (input === " " || input.length <= 1) {
        alert("Please enter a task to add to list");
        return;
    }
    // console.log(input.value)
    let todoListContainer = document.getElementById("listbox");

    // Task List Item 
    let creatdiv = document.createElement('div');
    creatdiv.className = 'creatdiv'

    // creatdiv.innerText = input;
    todoListContainer.appendChild(creatdiv);

    //outputdiv
    let outputdiv = document.createElement('div');
    outputdiv.setAttribute("id", "outputdivbar");
    creatdiv.appendChild(outputdiv);


    // //inputdiv
    // let inputdiv = document.createElement('inp');
    // inputdiv.setAttribute("id", "inputdiv");
    // inputdiv.value = input;
    // outputdiv.appendChild(inputdiv);

    //paradiv
    paradiv = document.createElement('p');
    paradiv.innerText = input;
    paradiv.setAttribute("id", "paradiv");
    outputdiv.appendChild(paradiv);

    //outputbtndiv
    let outputbtndiv = document.createElement('div');
    outputbtndiv.setAttribute("id", "outputbtndiv");
    creatdiv.appendChild(outputbtndiv);

    // Edit Button 
    editButton = document.createElement("button");
    editButton.innerHTML = `<i class="fa-solid fa-pen"></i>`;
    editButton.setAttribute("id", "edit-button");
    editButton.setAttribute("onclick", "editTask(this)");
    outputbtndiv.appendChild(editButton);

    // Delete Button 
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    deleteButton.setAttribute("id", "delete-button");
    deleteButton.setAttribute("onclick", "deleteTask(this)");
    outputbtndiv.appendChild(deleteButton);
    input.value = " ";
    console.log(input.value);

    // Edit Input 
    editInputField = document.createElement("input");
    editInputField.setAttribute("id", "editTaskInput");
    editInputField.value = input;
    outputdiv.appendChild(editInputField);
    console.log(editInputField.parentElement);
    editInputField.style.display = 'none';


}
function editTask(element) {
    // let paraEditParentElement = document.getElementById('outputdivbar');
    // console.log(paraEditParentElement);
    editInputField.style.display = 'flex';
    paradiv.style.display = 'none';
    editButton.style.display = 'none';
    // let edittaskbtn = paraEditParentElement.children[0];
    let khan = element.parentElement;
    // console.log(khan);
    // edittaskbtn.style.display = 'flex';
    let ali = khan.children[2];
    // edittaskbtnnone.style.display = 'none';
    doblesaver = document.createElement("button");
    doblesaver.innerHTML = `save`;
    doblesaver.setAttribute("id", "doble-button");
    doblesaver.setAttribute("onclick", "doblesave(this)");
    khan.appendChild(doblesaver);

}
function deleteTask(element) {
    var parentElement = element.parentElement.parentElement;
    parentElement.style.display = "none";
}
var moiz;
function doblesave(element) {
    let saver = document.getElementById('editTaskInput').value;
    var paradivsave = document.getElementById('paradiv');
    paradivsave.innerHTML = saver;
    doblesaver.style.display = "none";
    paradivsave.style.display = "flex";
    moiz = document.getElementById('editTaskInput');
    moiz.style.display = 'none';
    editButton.style.display = 'block';
}