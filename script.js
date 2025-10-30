// script.js
// Fungsi untuk menampilkan nama lengkap lewat alert
function showName() {
  const fullName = "ChatGPT (GPT-5 Thinking mini)";
  alert(fullName);
}

// Menambahkan event listener pada tombol
document.getElementById("helloBtn").addEventListener("click", showName);
