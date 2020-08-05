function mostrar()
{
	var edad;
	var nombre;
	var nacionalidad;
	var sexo;
	var temperaturaCorporal;
	var estadoCivil;
	var temperaturaMaxima = 0;
	var respuesta;
	var CantidadSolteros;
	var MayoresConMasDe38;
	var promedioEdadMujeres;
	var acumuladorMujeres = 0;

	do {
	do{
		nombre = prompt("Ingrese su nombre completo");
	}while(nombre == false);

	do{
		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);
	}while(isNaN(edad));

	do{
		nacionalidad = prompt(" Ingrese su nacionalidad");
	}while(nacionalidad == false );

	do {
		sexo = prompt("Ingrese sexo M/F");
		if(sexo = "F"){
		acumuladorMujeres++;
	}
	}while(sexo == false);

	do{
		estadoCivil = prompt("Ingrese su estado civil : soltero/casado/viudo");

	}while(!(estadoCivil != "soltero" || estadoCivil != "casado" 
	|| estadoCivil != "viudo"));

	do{
		temperaturaCorporal = prompt("Ingrese su temperatura corporal");
		temperaturaCorporal = parseInt(temperaturaCorporal);

	}while(temperaturaCorporal < 0 && isNaN(temperaturaCorporal));
	
	respuesta = confirm("Ingresar siguiente pasajero?")
}while(respuesta == true)


	if (temperaturaCorporal > temperaturaMaxima){
		
		temperaturaMaxima = temperaturaCorporal;
	}
	






}

