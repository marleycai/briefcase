var list = document.querySelector('ul');
list.addEventListener('click', function(ev) 
{
  if (ev.target.tagName === 'LI') 
  {
    ev.target.classList.toggle('checked');
  }
}, false);


const noteInput = document.getElementById("myInput");
const notes = document.getElementById("myUL");
const noteForm = document.getElementById("note-form");


let notesStorage = localStorage.getItem("notes")
  ? JSON.parse(localStorage.getItem("notes"))
  : [];

  noteForm.addEventListener("submit", (e) => 
  {
    e.preventDefault();

    var inputValue = document.getElementById("myInput").value;

    if (inputValue === '') 
  {
    alert("You must write something!");
  } else 
  {
    notesStorage.push(noteInput.value);
    localStorage.setItem("notes", JSON.stringify(notesStorage));
    listBuilder(noteInput.value);
    noteInput.value = "";
  }
    
  });

  const listBuilder = (text) => 
  {
    const note = document.createElement("li");
  
  
    note.innerHTML = text + ' <button class="btn-neon" onclick="deleteNote(this)">x</button>';
    notes.appendChild(note);
  };

  const getNotes = JSON.parse(localStorage.getItem("notes"));
getNotes.forEach((note) => 
{
  listBuilder(note);
});

const deleteNote = (btn) => 
{
  let el = btn.parentNode;
  const index = [...el.parentElement.children].indexOf(el);
  notesStorage.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesStorage));
  el.remove();
};
