function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	var min;
	var max;

	max = 11;
	min = 0;
	numeroRandom = Math.floor(Math.random()*(max - min))+min;
	//modulo calculo par o impar = %2==0 y !=0 es impar
	// potencia Math.pow(numeroRandom, 3)
	if (numeroRandom >= 9 ){
		alert(" excelente");
	}
	else { 
		if (numeroRandom >=4 ){
			alert(" aprobo ");
		}
		else alert (" recursa ")
	}


}//FIN DE LA FUNCIÓN