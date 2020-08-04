function mostrar()
{	
	var numerosPares = 0;
	var contador = 0;
	var numero;
	do {
		numero = prompt(" Ingrese un numero");
		numero = parseInt(numero);
	}
	while(isNaN(numero));{
		for(var i = 1 ;i < numero;i++){
			if (i % 2 == 0 )
		console.log(i);
		numerosPares++;




		}
	}
console.log(numerosPares);

}//FIN DE LA FUNCIÓN
/* for (var i = 2;i < numero; i +=2){
	numerosPares++;
	console.log(i);
}
console.log("los numeros pares son" + numerosPares);
} FORMA MAS CORTA DE HACERLO 
*/ 