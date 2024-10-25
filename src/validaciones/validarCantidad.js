const validarCantidad = () => {
	// expresion regular
	const expRegCantidad = /^\d+(\.\d+)?$/;

	// Obtenemos el input cantidad
	const inputCantidad = formulario.cantidad;

	// Transformamos la cantidad de una cadena de texto a numero con decimales.
	if (expRegCantidad.test(inputCantidad.value)) {
		inputCantidad.classList.remove("formulario__input--error");
		return true;
	} else {
		inputCantidad.classList.add("formulario__input--error");
		return false;
	}
};

export default validarCantidad;
