/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura;
    var centigrados;
    
    temperatura = txtIdTemperatura.value;
    temperatura = parseFloat(temperatura);
    
    centigrados = (temperatura - 32) * 5 / 9;
    alert(temperatura + " Grados fahrenheit equivalen a " + centigrados + " grados centigrados");
}

function CentigradosFahrenheit () 
{
   
    var temperatura;
    var fahrenheit;

    temperatura = txtIdTemperatura.value;
    temperatura = parseFloat(temperatura);
    
    fahrenheit = (temperatura * 9/5 ) + 32 ;
    alert(temperatura + " Grados centigrados equivalen a " + fahrenheit + " grados fahrenheit");
     
}
