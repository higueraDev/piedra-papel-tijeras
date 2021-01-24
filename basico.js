function usuarios(nombre1, nombre2) {
  this.nombre1 = nombre1;
  this.nombre2 = nombre2;
}

function validarEntradas() {
  var validacion1 = piedrasPapelTijeras.opciones.some(function (entrada) {
    return entrada === piedrasPapelTijeras.usuario1;
  });

  var validacion2 = piedrasPapelTijeras.opciones.some(function (entrada) {
    return entrada === piedrasPapelTijeras.usuario2;
  });

  return validacion1 && validacion2;
}

var piedrasPapelTijeras = {
  // Marcador del juego
  puntoUsuario1: 0,
  puntoUsuario2: 0,

  // entrada del usuario1
  usuario1: "",
  // entrada del usuario2
  usuario2: "",

  // Opciones Validas
  opciones: ["piedra", "papel", "tijeras"],

  // Nombres de usuarios
  nuevosUsuarios: new usuarios("", ""),

  mostrarMarcador: function () {
    console.log(
      `${this.nuevosUsuarios.nombre1}: ${this.puntoUsuario1} - ${this.nuevosUsuarios.nombre2}: ${this.puntoUsuario2}`
    );
  },

  // Mostrar opciones validas
  mostrarOpciones: function () {
    this.opciones.forEach(function (opcion) {
      console.log(`"${opcion}"`);
    });
  },

  // --------AQUI COMIENZA EL JUEGO----------//

  // Funcion principal
  jugar: function () {
    while (this.puntoUsuario1 < 5 && this.puntoUsuario2 < 5) {
      console.log("¡A jugar!");
      // Asinga un valor aleatorio a la entrada de usuario1
      this.usuario1 = this.opciones[Math.round(Math.random() * 3)];
      // Asinga un valor aleatorio a la entrada de usuario2
      this.usuario2 = this.opciones[Math.round(Math.random() * 3)];
      // Muestra las entradas
      console.log(`${this.nuevosUsuarios.nombre1}: ${this.usuario1}`);
      console.log(`${this.nuevosUsuarios.nombre2}: ${this.usuario2}`);

      var valido = validarEntradas();
      //Valida si ambas entradas son igual a las opciones
      if (valido) {
        switch (true) {
          // valida si hay empate
          case this.usuario1 === this.usuario2:
            console.log("Hay un empate");
            this.mostrarMarcador();
            this.jugar();
            break;
          //casos donde gana la usuario1
          case (this.usuario1 === "piedra" && this.usuario2 === "tijeras") ||
            (this.usuario1 === "papel" && this.usuario2 === "piedra") ||
            (this.usuario1 === "tijeras" && this.usuario2 === "papel"):
            console.log(`${this.nuevosUsuarios.nombre1} ha ganado`);
            this.puntoUsuario1++;
            this.mostrarMarcador();
            this.jugar();
            break;

          default:
            //si la usuario1 no gano, el usuario2 si

            console.log(`${this.nuevosUsuarios.nombre2} ha ganado`);
            this.puntoUsuario2++;
            this.mostrarMarcador();
            this.jugar();
        }
      } else {
        console.log(`Opcion no valida ingresa una de las siguientes opciones:`);
        this.mostrarOpciones();
        this.jugar();
      }
    }
  },
  // Resultados
  resultados: function () {
    this.puntoUsuario1 == 5
      ? console.log(
          `¡Felicidades ${this.nuevosUsuarios.nombre1} eres el/la campeón/a!`
        )
      : console.log(
          `¡Felicidades ${this.nuevosUsuarios.nombre2} eres el/la campeón/a!`
        );
  },
};

piedrasPapelTijeras.nuevosUsuarios.nombre1 = "Maria";
piedrasPapelTijeras.nuevosUsuarios.nombre2 = "Juan";
piedrasPapelTijeras.jugar();
piedrasPapelTijeras.resultados();
