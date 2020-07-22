function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	var min;
	var max;

	max = 11;
	min = 0;
	numeroRandom = Math.floor(math.random()*(max - min))-min;
	MiBotonUTNnav.value = numeroRandom
	alert(numeroRandom);
}//FIN DE LA FUNCIÓN