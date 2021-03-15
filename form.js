var clear_btn = document.getElementById("btn-clear");
var notes = document.getElementById("notes");
var title = document.getElementById("title");

//Main function that handles saving data to local storage.  Only have title and notes field, so 
function saveData(){
    window.localStorage.setItem('title', title.value);
    window.localStorage.setItem('notes', notes.value);
}

//Per lab instructions, oninput will call saveData function when notes field is interacted with to save to local storage.
notes.oninput = function(){
    saveData();
}

//uses getItem command of localStorage to fill the 2 fields when the window loads
window.onload = function(){
    title.value = window.localStorage.getItem('title');
    notes.value = window.localStorage.getItem('notes');
}

//Couldn't use localStorage.clear here since it would reset all pairs, so just emptied out the notes and titles of any chars/string values
clear_btn.onclick = function() {
    title.value = "";
    notes.value = "";
    saveData();
}

