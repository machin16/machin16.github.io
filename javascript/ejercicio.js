//resolviendo la tarea :

let figure = prompt("Escribe el nombre de la figura que deseas calcular el area (minuscula): ")

let  baseMayor;
let  base;
let  heigth;
let  lado;
let  dimemsion;
let  apotema;
let  dimensionMayor;
let  diagonal;
let  diagonalMayor;
let  perimetro;


switch(figure){
    case "cuadrado":
        lado = prompt("cuanto tiene sus lados")
        console.log(`El area del cuadrado es ${lado*lado}`)
        break
    
    case "rombo":
        diagonalMayor = prompt("cuando mide la Diagonal mayor")
        diagonal = prompt("cuanto mide la diagonal menor")
        console.log(`El ara del rombo es ${diagonalMayor*diagonal}`)
        break

    case "romboide":
        base = prompt("cuanto tiene de base")
        heigth = prompt("cuanto tiene de altura")
        console.log(`El area del romboide es ${base*heigth}`)
        break

    case "trapecio":
        heigth = prompt("cuanto tiene de altura")
        baseMayor = prompt("cuanto  su Base mayor")
        base = prompt("cuanto mide su base menor")
        console.log(`El area del trapecio es ${(heigth)*(baseMayor*base)/2}`)
        break

    case "poligono":
        apotema = prompt("cuanto mide su apotema")
        perimetro = prompt("cuanto tiene de perimetro")
        console.log(`el area del poligono es ${(perimetro*apotema)/2}`)



    }     
