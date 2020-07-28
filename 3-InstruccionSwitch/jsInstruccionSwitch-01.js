function mostrar()
{
	//tomo el mes
	var mesDelAño = txtIdMes.value;
	
	switch (mesDelAño) {
		case "Enero":
			alert(" Empiecen bien el año !!");
		break;

		case "Marzo":
			alert(" A clases ja !!");
		break;

		case "Julio":
			alert(" Empiezan las vacaciones!");
		break;

		case "Diciembre":
			alert(" Felices fiestas!!");
		break;
	
		default:
			alert(" otro mes");
			break;
	
	}


}//FIN DE LA FUNCIÓN