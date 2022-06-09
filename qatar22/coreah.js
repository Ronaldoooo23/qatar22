var d = document.getElementById("no");
        var context2 = d.getContext("2d");


        context2.fillStyle = "white"
        context2.fillRect(0, 0, 800, 400)
circulo()
        function circulo() {
        context2.beginPath();
        context2.strokeStyle = "Blue";
        context2.lineWidth = 3;
        context2.arc(400, 200, 50, 0, 2 * Math.PI);
        context2.stroke();
        context2.fillStyle = "blue"
        context2.fill();
        
   }
