function mostrar()
{
	var edad;
	var estadoCivilIngresado;
	edad = txtIdEdad.value;
	estadoCivilIngresado = estadoCivil.value;

	parseInt(edad);
	
	if (edad >= 18 && estadoCivilIngresado == "Soltero") {
		alert (" no es menor de edad y es soltero");
	}
	


}//FIN DE LA FUNCIÓN