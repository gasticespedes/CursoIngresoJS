function mostrar()
{
	var edad;
	edad = txtIdEdad.value;

	parseInt(edad);

	if (edad >= 18 )
	{
		alert(" Es mayor de edad");

	}
	else {
		if (edad <= 12 )
		{
			alert (" es menor de edad ");

		}
		else alert (" es adolescente ");
	
	}
	



}//FIN DE LA FUNCIÓN