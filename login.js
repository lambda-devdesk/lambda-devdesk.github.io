var modal = document.getElementById('id01');

// clicking outside of the box will close the login
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}