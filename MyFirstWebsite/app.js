function darkMode()
{
    document.body.className = "dark-theme";
}

function lightMode()
{
    document.body.className = "light-theme";
}
function displayMenu()
{
    var elementId = document.getElementById("mainmenu");

    elementId.style.display == "block" ? elementId.style.display = "none" : elementId.style.display = "block";
}

var i, checkboxes = document.querySelectorAll('input[type=checkbox]');

function save() {
    for (i = 0; i < checkboxes.length; i++) {
        localStorage.setItem(checkboxes[i].value, checkboxes[i].checked); 
    }
}

function load_() {
    for (i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = localStorage.getItem(checkboxes[i].value) === 'true' ? true:false;
    }
} 