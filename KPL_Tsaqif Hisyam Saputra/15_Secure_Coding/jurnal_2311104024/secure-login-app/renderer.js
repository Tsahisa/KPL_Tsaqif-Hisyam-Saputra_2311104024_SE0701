// Hashing SHA-256
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

// Validasi input
function validateInput(username, password) {
  const usernameRegex = /^[A-Za-z]{4,20}$/;
  const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*[0-9])[A-Za-z0-9!@#$%^&*]{8,20}$/;

  if (!usernameRegex.test(username)) {
    return "Username hanya boleh huruf (4-20 karakter).";
  }

  if (password.includes(username)) {
    return "Password tidak boleh mengandung username.";
  }

  if (!passwordRegex.test(password)) {
    return "Password harus 8-20 karakter, minimal 1 angka dan 1 simbol (!@#$%^&*).";
  }

  return null;
}

// Registrasi
async function registerUser() {
  const username = document.getElementById("regUsername").value.trim();
  const password = document.getElementById("regPassword").value;

  const error = validateInput(username, password);
  if (error) {
    document.getElementById("message").innerText = error;
    return;
  }

  const hashedPassword = await hashPassword(password);
  const data = await window.electronAPI.readUsers();

  if (data.users.some(u => u.username === username)) {
    document.getElementById("message").innerText = "Username sudah terdaftar.";
    return;
  }

  data.users.push({ username, password: hashedPassword });
  await window.electronAPI.saveUsers(data);
  document.getElementById("message").innerText = "Registrasi berhasil!";
}

// Login
async function loginUser() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;
  const hashedPassword = await hashPassword(password);
  const data = await window.electronAPI.readUsers();

  const user = data.users.find(u => u.username === username && u.password === hashedPassword);
  document.getElementById("message").innerText = user ? "Login berhasil!" : "Username atau password salah.";
}