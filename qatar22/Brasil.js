var d = document.getElementById("grupog");
var lienzo = d.getContext("2d");
var linea = 300;
var l = 0;
var yi, xf;

  lienzo.fillStyle = "green"
  lienzo.fillRect(0, 0, 300, 300)

while(l < linea)

{
    dibujarLinea("green", 0, 0, 100, 300);


    l = l +1;

}
 rombo();
 circulo();

  function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
   {
    lienzo.beginPath();
    lienzo.strokeStyle= "green";
    lienzo.moveTo(0, 300);
    lienzo.lineTo(300, 300);
    lienzo.stroke();
    lienzo.closePath();
   }

   function rombo(){
    lienzo.lineWidth = 5;
    lienzo.strokeStyle = "#212121";
    lienzo.fillStyle = "yellow";
    lienzo.beginPath();
    lienzo.moveTo(150, 35);
    lienzo.lineTo(260, 150);
    lienzo.lineTo(150, 260);
    lienzo.lineTo(35, 150);
    lienzo.closePath();
    lienzo.stroke();
    lienzo.fill();
   }

   function circulo() {
    lienzo.beginPath();
    lienzo.strokeStyle = "blue";
    lienzo.lineWidth = 3;
    lienzo.arc(150, 150, 45,0,  2 * Math.PI);
    lienzo.stroke();
    lienzo.fillStyle = "blue"
    lienzo.fill();
    
   }