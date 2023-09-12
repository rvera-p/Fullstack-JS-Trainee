class Cliente {
  constructor(nombre, id, clave, saldo) {
    this.nombre = nombre;
    this.id = id;
    this.clave = clave;
    this.saldo = saldo;
  }

  ver_saldo() {
    alert(`Mi saldo actual es $${this.saldo}.`);
  }

  girar(monto) {
    if (monto > this.saldo) {
      alert("Fondos insuficientes!");
    } else {
      this.saldo -= monto;
      alert(`Giro realizado. Su nuevo saldo es ${this.saldo}`);
    }
    return this.saldo;
  }

  deposito(monto) {
    this.saldo += monto;
    alert(`Deposito realizado. Su nuevo saldo es $${this.saldo}`);
    return this.saldo;
  }
}

const clientes = [
  new Cliente("Patricia Torres", "BANCA001", "psw123", 30000),
  new Cliente("Pablo Pinto", "BANCA002", "psw456", 10100),
  new Cliente("Juan Toro", "BANCA003", "psw789", 23500)
];

function login() {
  const id = prompt("Ingrese su identificador: ");
  const clave = prompt("Ingrese su clave: ");

  const cliente = clientes.find(
    (cliente) => cliente.id == id && cliente.clave == clave
  );

  if (cliente) {
    alert(`Bienvenido ${cliente.nombre}`);
    menu_usuario(cliente);
  } else {
    alert("Identificador o contraseñas incorrectos!");
  }
}

function menu_usuario(cliente) {
  opcion = parseInt(
    prompt(
      "Seleccione que desea hacer:\n1.-Ver saldo\n2.-Realizar giro\n3.-Realizar deposito\n4.-Salir"
    )
  );

  switch (opcion) {
    case 1:
      cliente.ver_saldo();
      menu_usuario(cliente);
      break;
    case 2:
      monto_giro = parseInt(
        prompt(
          `Su saldo actual es: ${cliente.saldo}\nIngrese el monto que desea girar`
        )
      );
      cliente.girar(monto_giro);
      menu_usuario(cliente);
      break;
    case 3:
      monto_dep = parseInt(
        prompt(
          `Su saldo actual es: ${cliente.saldo}\nIngrese el monto que desea depositar`
        )
      );
      cliente.deposito(monto_dep);
      menu_usuario(cliente);
      break;
    case 4:
      alert("Cerrando sesion.");
      break;
    default:
      alert("Opcion incorrecta.");
      menu_usuario(cliente);
      break;
  }
}

alert("Bienvenido a Banca en Linea");
login();
