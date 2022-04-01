function toggleButton() {
  document.body.classList.toggle("dark");
}

function darkModeToggle() {
  document.getElementById("darkModeCheckbox").checked
    ? document.body.classList.add("dark")
    : document.body.classList.remove("dark");
}
