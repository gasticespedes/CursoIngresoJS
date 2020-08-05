
function mostrar()
{
	var contador = 0;
	var tipoDeProducto;
	var acumulador = 0;
	var promedio;
	var precio;
	var cantidadDeUnidades;
	var marca;
	var fabricante;
	var precioMaximoJabon;
	var contadoDeJabones = 0;
	var cantidadUnidadesJabonMaximo;
	var fabricanteMaximoJabones;
	var cantidadesMaximas = 0;
	var acumuladorCantidadesBarbijo = 0;
	var acumuladorCantidadesAlcohol = 0;
	var acumuladorCantidadesJabon = 0;
	var promedioPorCompra;
	var contadorJabon = 0;
	var contadorAlcohol = 0;
	var contadorBarbijo = 0;

	while(contador < 5){
		contador++;
		do{
			tipoDeProducto = prompt("Ingrese tipo de producto");

		}while(tipoDeProducto != "barbijo" && tipoDeProducto != "alcohol"
				&& tipoDeProducto != "jabon");
		
		do{
			precio = prompt("ingrese un precio");
			precio = parseInt(precio);

		}while(precio < 100  || precio > 300 || isNaN(precio));

		do{
			cantidadDeUnidades = prompt(" Ingrese cantidad de unidades");
			cantidadDeUnidades = parseInt(cantidadDeUnidades);

		}while(cantidadDeUnidades < 1 || cantidadDeUnidades > 1000 || 
			isNaN(cantidadDeUnidades));

		do {
			marca = prompt("Ingrese una marca");
		}while(marca == false);

		do{
			fabricante = prompt("Ingrese fabricante");
		}while(fabricante == false);
	}

	//PUNTO A ES SACAR MAX O MIN
	if (tipoDeProducto == "jabon"){
		contadoDeJabones++;
		if(contadoDeJabones == 1 ){
			precioMaximoJabon = precio;
			cantidadUnidadesJabonMaximo = cantidadDeUnidades;
			cantidadUnidadesJabonMaximo = fabricante;
		}
		else {
			if(precio > precioMaximoJabon){
				precioMaximoJabon = precio;
				cantidadUnidadesJabonMaximo = cantidadDeUnidades;
				cantidadUnidadesJabonMaximo = fabricante;
			}
		}
//PUNTO B
 	 switch (TipoDeProducto) {
		 
	case "alcohol":
		acumuladorCantidadesAlcohol += cantidadDeUnidades;
		contadorAlcohol++;
		break;
	case "barbijo":
		acumuladorCantidadesBarbijo = acumuladorCantidadesBarbijo + cantidadDeUnidades;
		contadorBarbijo++;
		break;
	case "jabon":

		acumuladorCantidadesJabon += cantidadDeUnidades;
		contadorJabon++;
		break;
		//if(cantidadDeUnidades > cantidadesMaximas){
			//cantidadesMaximas = cantidadDeUnidades;

		}
		if (acumuladorCantidadesAlcohol > acumuladorCantidadesBarbijo &&
			acumuladorCantidadesAlcohol > acumuladorCantidadesJabon){
			//es mayor alcohol
			promedioPorCompra = acumuladorCantidadesAlcohol / contadorAlcohol;
			}
			else if (acumuladorCantidadesBarbijo > acumuladorCantidadesJabon){
			//es mayor barbijo 
			promedioPorCompra = acumuladorCantidadesBarbijo / contadorBarbijo;
		}
			else{
				promedioPorCompra = acumuladorCantidadesJabon / contadorJabon;
				//jabon es mayor
			}

			//PUNTO C 

			alert("es" + acumuladorCantidadesBarbijo)


	}




}
