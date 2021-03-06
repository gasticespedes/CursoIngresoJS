/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

function CalcularPrecio () 

{
	var precioLampara;
	precioLampara = 35;
	var cantidadDeLamparasCompradas;
	cantidadDeLamparasCompradas = parseInt(txtIdCantidad.value);
	var marcaLampara;
	marcaLampara = Marca.value;
	var subTotal;
	subTotal = cantidadDeLamparasCompradas * precioLampara;
	var precioConDescuento;
	precioConDescuento = subTotal;
	txtIdPrecioDescuento.value = precioConDescuento;
	var iibb;
	var precioTotal;


	if (cantidadDeLamparasCompradas>=6) {
		precioConDescuento = subTotal * 0.50;
	} else {
		if (cantidadDeLamparasCompradas===5) {
			switch(marcaLampara) {
				case "ArgentinaLuz":
					precioConDescuento = subTotal * 0.60;
					break;
				default:
					precioConDescuento = subTotal * 0.70;
					break;
			}
		} else {
			if (cantidadDeLamparasCompradas===4) {
				switch (marcaLampara) {
					case "ArgentinaLuz":
					case "FelipeLamparas":
						precioConDescuento = subTotal * 0.75;
						break;
					default:
					 	precioConDescuento = subTotal * 0.80;
					 	break;
				}
			} else {
				if (cantidadDeLamparasCompradas===3) {
					switch (marcaLampara) {
						case "ArgentinaLuz":
							precioConDescuento = subTotal * 0.85;
							break;
						case "FelipeLamparas":
							precioConDescuento = subTotal * 0.90;
							break;
						default:
							precioConDescuento = subTotal * 0.95;
							break;
					}
                }
            }
        }
    }
}
