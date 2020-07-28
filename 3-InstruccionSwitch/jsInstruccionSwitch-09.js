function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var precioEstandar = 15000;
	var destino = txtIdDestino.value;
	var descuento;
	var precioFinal;

	switch (estacionIngresada) {
		case "Invierno":
			switch (destino) {
				case "Bariloche":
					alert ( " El precio es " + precioEstandar * 1.20);
					break;

					case "Mar del plata":
						descuento = precioEstandar * 0.20;
						precioFinal = precioEstandar - descuento;
						alert(" El precio es " + precioFinal);
					
					break;

			
				default:
					descuento = precioEstandar * 0.10;
					precioFinal = precioEstandar - descuento;
					alert(" El precio es " + precioFinal);
					break;
			}
			
		case "Verano":
			switch (destino) {
				case "Bariloche":
					descuento = precioEstandar * 0.20;
					precioFinal = precioEstandar - descuento;
					alert(" El precio es " + precioFinal);
					break;
				
				case "Mar del plata":
					descuento = precioEstandar * 0.20;
					precioFinal = precioEstandar + descuento;
					alert(" El precio es " + precioFinal);

					break;
				
				default:
					descuento = precioEstandar * 0.10;
					precioFinal = precioEstandar - descuento;
					alert(" El precio final es " + precioFinal);

					break;

		
			}
			break;
	
		default:
			switch (destino) {
				case "Mar del plata":
					alert (" El precio final es " + precioEstandar);

					break;
			
				default:
					descuento = precioEstandar * 0.10;
					precioFinal = precioEstandar + descuento;
					alert(" El precio final es " + precioFinal);
					
					break;
			}
			break;
	}

}//FIN DE LA FUNCIÓN