let fComuniquemonos = document.getElementById("linkFormC");
let fReserva = document.getElementById("linkFormR");
let formComuniquemonos = document.getElementById("formComuniq");
let formReserv = document.getElementById("formReserva");

fComuniquemonos.addEventListener("click", () => {
  document.getElementById("fReser").style.cssText = "none";
  document.getElementById("fComuniq").style.display = "block";
  document.te;
});

fReserva.addEventListener("click", () => {
  document.getElementById("fComuniq").style.display = "none";
  document.getElementById("fReser").style.display = "block";
});

formComuniquemonos.addEventListener("submit", function (event) {
  event.preventDefault();
  let camposVacios = 0;

  let inputNombre = document.getElementById("inputNombreC");
  let inputCorreo = document.getElementById("inputCorreoC");
  let inputTelefono = document.getElementById("inputTelefonoC");
  let inputMotivo = document.getElementById("inputMotivoC");
  let inputDescripcion = document.getElementById("inputDescripcionC");

  if (inputNombre.value == "") {
    alert("El campo 'Nombre' es obligatorio");
    camposVacios++;
  } else if (inputCorreo.value == "") {
    alert("El campo 'Correo' es obligatorio");
    camposVacios++;
  } else if (inputTelefono.value == "") {
    alert("El campo 'Telefono' es obligatorio");
    camposVacios++;
  } else if (inputMotivo.value == "") {
    alert("El campo 'Motivo' es obligatorio");
    camposVacios++;
  } else if (inputDescripcion.value == "") {
    alert("El campo 'Descripcion' es obligatorio");
    camposVacios++;
  }
  if (camposVacios == 0) {
    alert(
      `Muchas gracias ${inputNombre.value} hemos recibido su ${inputMotivo.value} y enviaremos un pronta respuesta al correo ${inputCorreo.value}`
    );
    formComuniquemonos.reset();
  }
});

formReserv.addEventListener("submit", function (event) {
  event.preventDefault();
  let camposVacios = 0;

  let inputNombre = document.getElementById("inputNombreR");
  let inputCorreo = document.getElementById("inputCorreoR");
  let inputTelefono = document.getElementById("inputTelefonoR");
  let inputFecha = document.getElementById("inputFechaR");
  let inputHora = document.getElementById("inputHoraR");
  let inputAsistentes = document.getElementById("inputAsistentesR");

  if (inputNombre.value == "") {
    alert("El campo 'Nombre' es obligatorio");
    camposVacios++;
  } else if (inputCorreo.value == "") {
    alert("El campo 'Correo' es obligatorio");
    camposVacios++;
  } else if (inputTelefono.value == "") {
    alert("El campo 'Telefono' es obligatorio");
    camposVacios++;
  } else if (inputFecha.value == "") {
    alert("El campo 'Fecha' es obligatorio");
    camposVacios++;
  } else if (inputHora.value == "") {
    alert("El campo 'Hora' es obligatorio");
    camposVacios++;
  }else if (inputAsistentes.value == "") {
    alert("El campo 'Cantidad de Asistentes' es obligatorio");
    camposVacios++;
  }

  if (camposVacios == 0) {
    alert("Reserva lista!");
    formReserv.reset();
  }
});