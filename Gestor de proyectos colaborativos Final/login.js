function mostrarRegistro() {
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('register-form').classList.remove('hidden');
  document.getElementById('task-section').classList.add('hidden');
}

function mostrarLogin() {
  document.getElementById('register-form').classList.add('hidden');
  document.getElementById('login-form').classList.remove('hidden');
  document.getElementById('task-section').classList.add('hidden');
}

function login(event) {
  event.preventDefault(); // evita recarga

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  alert("Intentando iniciar sesión con:\nEmail: " + email + "\nContraseña: " + password);

  // Ocultar formularios
  document.getElementById('login-form').classList.add('hidden');
  document.getElementById('register-form').classList.add('hidden');

  // Mostrar sección de tareas
  document.getElementById('task-section').classList.remove('hidden');
  document.getElementById("project-section").classList.remove("hidden");


  // Llenar tareas
  mostrarTareas();
   mostrarProyectos();
}

function registrar(event) {
  event.preventDefault();

  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  alert("Registro enviado:\nNombre: " + name + "\nEmail: " + email);
  mostrarLogin();
}

function verificarFortaleza() {
  const password = document.getElementById("register-password").value;
  const strengthText = document.getElementById("password-strength");

  let strength = 0;

  if (password.length >= 6) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[\W_]/.test(password)) strength++;

  let mensaje = '';
  let color = '';

  switch (strength) {
    case 0:
    case 1:
      mensaje = "Contraseña débil";
      color = "red";
      break;
    case 2:
      mensaje = "Contraseña media";
      color = "orange";
      break;
    case 3:
    case 4:
      mensaje = "Contraseña fuerte";
      color = "green";
      break;
  }

  strengthText.textContent = mensaje;
  strengthText.style.color = color;
}

function validarCoincidencia() {
  const password = document.getElementById("register-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const matchText = document.getElementById("password-match");

  if (confirmPassword === "") {
    matchText.textContent = "";
    return;
  }

  if (password === confirmPassword) {
    matchText.textContent = "Las contraseñas coinciden";
    matchText.style.color = "green";
  } else {
    matchText.textContent = "Las contraseñas no coinciden";
    matchText.style.color = "red";
  }
}

function registrar(event) {
  event.preventDefault();

  const name = document.getElementById("register-name").value.trim();
  const email = document.getElementById("register-email").value.trim();
  const password = document.getElementById("register-password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const mensaje = document.getElementById("registro-mensaje");

  if (password !== confirmPassword) {
    mensaje.textContent = "❌ Las contraseñas no coinciden.";
    mensaje.style.color = "red";
    return;
  }

  if (password.length < 6) {
    mensaje.textContent = "❌ La contraseña debe tener al menos 6 caracteres.";
    mensaje.style.color = "red";
    return;
  }

  // Aquí iría tu lógica real de registro, por ahora mostramos un mensaje de éxito.
  mensaje.textContent = "✅ Registro exitoso.";
  mensaje.style.color = "green";

  // Puedes aquí guardar datos en localStorage o pasar al login
  console.log("Registrado correctamente:", name, email);
  
  // Opcional: limpiar campos
  document.getElementById("register-form").reset();
  document.getElementById("password-strength").textContent = "";
  document.getElementById("password-match").textContent = "";

  // Opcional: mostrar login tras registro
  // mostrarLogin();
}