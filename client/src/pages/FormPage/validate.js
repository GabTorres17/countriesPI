export default function validate(formValues) {
    const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const errors = {};


    if(!formValues.nombre.length) {
        errors.nombre = "Debe ingresar un nombre"
    } else {
        const nombreRegex = /^[A-Za-z]+$/; // Expresión regular que permite solo letras
    if (!nombreRegex.test(formValues.nombre)) {
      errors.nombre = "El nombre no puede contener números ni espacios";
    }
  }

    if(!formValues.dificultad.length) {
        errors.dificultad = "Debe ingresar un email"
    } else {
        const dificultadRegex = /^[1-5]$/; // Expresión regular para números del 1 al 5
        if (!dificultadRegex.test(formValues.dificultad)) {
          errors.dificultad = "La dificultad debe ser un número del 1 al 5";
        }
      }

    if (!formValues.duracion.length) {
        errors.duracion = "Debe ingresar una duración en horas";
        } else {
        const duracionNumber = parseInt(formValues.duracion);
        if (isNaN(duracionNumber) || duracionNumber <= 0) {
          errors.duracion = "La duración debe ser un número positivo";
        }
    }

    if(!formValues.temporada.length) {
        errors.temporada = "Debe seleccionar una temporada "
    } else {
        const temporadasPermitidas = ["Verano", "Otoño", "Invierno", "Primavera"];
        if(!temporadasPermitidas.includes(formValues.temporada)) {
            errors.temporada = "La temporada seleccionada no es válida"
        }
    }
    

        return errors;
}