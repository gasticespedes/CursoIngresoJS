function mostrar()
{
  var respuesta;
  var bolsasCal;
  var contadorCal = 0;
  var precioCal;
  var bolsasArena;
  var contadorArena = 0;
  var precioArena;
  var bolsasCemento;
  var contadorCemento = 0;
  var precioCemento;
  var bolsas;
  var precioBruto;
  var bolsasTotales;
  var descuentoUno;
  var descuentoDos;
  var PrecioMaximo = 0;
    do{

      bolsas = prompt("Que producto desea adquirir ? Arena/Cemento/Cal ");
        if(bolsas == "Arena"){
          do{
          alert("El precio por bolsa es de 80$");
          bolsasArena = prompt("Cuantas bolsas desea comprar?");
          bolsasArena = parseInt(bolsasArena);
             } while(isNaN(bolsasArena));

          contadorArena = contadorArena + bolsasArena;
        }
        else {
          if(bolsas == "Cemento"){
            do {
              alert("El precio por bolsa es de 120$");
            bolsasCemento = prompt("Cuantas bolsas desea comprar ?");
            bolsasCemento = parseInt(bolsasCemento);
          }while(isNaN(bolsasCemento));

            contadorCemento = contadorCemento + bolsasCemento;
            
          }
          else{ 
            do{ 
              alert("El precio por bolsa es de 60$");
              bolsasCal = prompt("Cuantas bolsas desea comprar ?");
              bolsasCal = parseInt(bolsasCal);
            }while(isNaN(bolsasCal));

            contadorCal = contadorCal + bolsasCal;
           }
        }
        respuesta = prompt("Quiere agregar otro producto ? Si/No");
      }while(respuesta == "Si");
        precioArena = contadorArena * 80;
        precioCemento = contadorCemento * 120;
        precioCal = contadorCal * 60;
        precioBruto = precioCal + precioCemento + precioArena;
        bolsasTotales = contadorCal + contadorCemento + contadorArena;
        descuentoUno = precioBruto -(precioBruto * 0.15);
        descuentoDos = precioBruto - (precioBruto * 0.25);

      alert (" El total bruto a pagar es " + precioBruto);

      if(bolsasTotales >= 10){
        
        alert(" Al comprar mas de 10 bolsas pagara " + descuentoUno );

      } else {
       if(bolsasTotales >= 30){
         alert(" Al comprar mas de 30 bolsas pagara " + descuentoDos);
       }
      }

      if(contadorArena > contadorCal && contadorArena > contadorCemento){
        alert("Compro mas bolsas de arena con un total de "+contadorArena);
      }
      else {
        if (contadorCal > contadorCemento){
          alert("Compro mas bolsas de Cal con un total de " + contadorCal);}
          
          else{
          alert("Compro mas bolsas de Cal con un total de " + contadorCemento);

        }

      }
      if (precioBruto > PrecioMaximo){
        PrecioMaximo = precioBruto;
        alert("el precio maximo es "+ PrecioMaximo);
      }


}