function calcularPromedio() {
    var notasString = document.getElementById("notas").value;
    var notasArray = notasString.split(',');
    
    var suma = 0;
    var cantidadNotas = 0;
    
    for (var i = 0; i < notasArray.length; i++) {
      var nota = parseFloat(notasArray[i].trim()); // Convertir a número y eliminar espacios en blanco
      if (!isNaN(nota)) {
        suma += nota;
        cantidadNotas++;
      }
    }
    
    if (cantidadNotas > 0) {
      var promedio = suma / cantidadNotas;
      document.getElementById("resultado").innerText = "El promedio es: " + promedio.toFixed(2);
    } else {
      document.getElementById("resultado").innerText = "Ingresa notas válidas";
    }
  }
  