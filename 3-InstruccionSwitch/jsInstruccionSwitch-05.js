function mostrar()
{
	//tomo la hora
	var horaDelDia = txtIdHora.value;
	parseInt(horaDelDia);

	switch (horaDelDia) {
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			alert(" es de la mañana ");
		break;
		default:
			alert(" Es otro horario");
			break;
	}
	
	



}//FIN DE LA FUNCIÓN