/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var ancho;
    var largo;
    var radio;
    var rectanguloAlambre;
    
    ancho = txtIdAncho.value;
    largo = txtIdLargo.value;
    radio = txtIdRadio.value;

    ancho = parseInt(ancho);
    largo = parseInt(largo);
    radio = parseInt(radio);
    
    rectanguloAlambre = ((ancho * 2) + (largo *2))* 3;
    
    alert("Se debe comprar " + rectanguloAlambre + " de alambre");


}
function Circulo () 
{   
    var ancho;
    var largo;
    var radio;
    var perimetroAlambre;
    
    ancho = txtIdAncho.value;
    largo = txtIdLargo.value;
    radio = txtIdRadio.value;
    
    ancho = parseInt(ancho);
    largo = parseInt(largo);
    radio = parseFloat(radio);

    perimetroAlambre = 2 * Math.PI * radio ;
    perimetroAlambre = Math.ceil(perimetroAlambre)*3 ;
     // perimetro
    alert("Se debe comprar "+ perimetroAlambre + " de alambre");
        
    // CONSOLE.LOG : ejecuta en consola , toFixed(DECIMALES) = es para poner decimales, parseInt = lo deja en el numero mas bajo ej 3 en pi
    // math.floor redondea para abajo, math.ceil redondea para arriba
}
function Materiales () 
{
    var largo;
    var ancho;
    var bolsaCemento;
    var bolsaCal;
    var area;


    ancho = txtIdAncho.value;
    largo = txtIdLargo.value;
    
    ancho = parseInt(ancho);
    largo = parseInt(largo);

    area = ancho * largo;
    bolsaCemento = area * 2; // es regla de 3 simple 
    bolsaCal = area * 3;
    alert("se necesitan " + bolsaCemento + " de cemento " + " y " + bolsaCal + " de cal");
}