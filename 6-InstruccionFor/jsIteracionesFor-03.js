function mostrar()
{
	var repeticiones;
	do{
	repeticiones = prompt("Cuantas veces te saludo?");
	repeticiones = parseInt(repeticiones);
	}
	while(repeticiones < 1 || isNaN(repeticiones));{
	
		for(var numero = 0; numero < repeticiones; numero++);{
			alert("HOLA UNT");
		}
	}
	
	
	
		
	
	

}//FIN DE LA FUNCIÓN