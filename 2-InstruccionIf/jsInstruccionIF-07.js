function mostrar()
{
	var edad;
	edad = txtIdEdad.value;

	var estadoCivilIngresado;
	estadoCivilIngresado = estadoCivil.value;

	parseInt(edad);

	if (edad < 18 && estadoCivilIngresado != "Soltero"){
		alert(" es muy pequeño para no estar soltero")
	}
	


}//FIN DE LA FUNCIÓN