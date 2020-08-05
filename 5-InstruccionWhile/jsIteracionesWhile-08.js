/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	do{

		numero = prompt(" Ingrese un numero");
		numero = parseInt(numero);

		if(numero >= 0 ){

			sumaPositivos = sumaPositivos + numero;
		}
		 else { 

			multiplicacionNegativos = multiplicacionNegativos * numero;
		}

		respuesta = prompt(" Desea añadir otro numero ? Si/No")
	}while(respuesta == "Si");


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN