//usar switch
//EJERCICIO: Crear un programa que me permita calcular el dia de la semana
/*
1 lunes
2 martes
3 miercoles
4 jueves
5 viernes
6 sabado
7 domingo
*/

 let dia=new Date().getDay();
 let aleatorio = Math.random() * (8 - 1) + 1;
 parseInt(aleatorio);
 console.log(aleatorio);
 //utilizar switch cuando voy a comprar un solo valor quetendra diferentes resultados
 let nombredia= "";
 switch(aleatorio){

    case 1:
        nombredia="Lunes";
        break;
    case 2:
        nombredia="Martes";
        break;
    case 3:
        nombredia="Miercoles";
        break;
    case 4:
        nombredia="Jueves";
        break;
    case 5:
        nombredia="Viernes";
        break;
    case 6:
        nombredia="Sabado";
        break;
    case 7:
        nombredia="Domingo";
        break;   
    default:
        nombredia="No es un dia de semana";
        break;
 }
console.log(nombredia);

