let user = document.getElementById("user");
let pass = document.getElementById("pass");

function login() {
  
  if (user.value === '' || pass.value === '') {
    alert('username dan password tidak boleh kosong!');
    return;
  }else if(user === "admin" && pass === "admin") {
    alert('selamat datang berhasil login');
    document.location.href ="admin.html"
  } else {
    alert('username dan password salah');
  }
}