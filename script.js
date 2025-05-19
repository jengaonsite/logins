
function checkPassword() {
  const input = document.getElementById("password").value;
  const actualPassword = "pass@n0n3";

  if (input === actualPassword) {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").style.display = "block";
  } else {
    alert("Wrong password!");
  }
}
