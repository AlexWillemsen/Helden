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