/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	sueldo = txtIdSueldo.value;
	
	sueldo = parseInt(sueldo);
	resultado = sueldo* 1.1; // ES REGLA DE 3 SIMPLE PUEDE SER *110 / 100
	txtIdResultado.value = resultado 
	
	// PUEDO SACAR RESULTADO Y PONER EN TXTIDRESULTADO.VALUE = SUELDO *1.1
	

	
}
