function mostrar()
{
	var numero;
	
	do {
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

	}while(numero < 1 || isNaN(numero));

	for (var i = 1;i < numero; i++){
		if(numero % i == 0){
			console.log(i);
		}

		
		
	}

	

}