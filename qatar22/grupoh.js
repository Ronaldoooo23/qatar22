var lienzo = document.getElementById("jh");
        var context = lienzo.getContext("2d");

        context.fillStyle = "White"
        context.fillRect (0,0,800,400);
        context.fillStyle = "White";
        context.fillRect(0, 0, 400, 200);
        context.fillStyle = "#1386eb";
        context.fillRect(400,0, 400, 31);
        context.fillStyle = "#1386eb";
        context.fillRect(400,62, 400, 31);
        context.fillStyle = "#1386eb";
        context.fillRect(400,124, 400, 31);
        context.fillStyle = "#1386eb";
        context.fillRect(400,186, 400, 31);
        context.fillStyle = "#1386eb";
        context.fillRect(0,248, 800, 31);
        context.fillStyle = "#1386eb";
        context.fillRect(0,310, 800, 31);
        context.fillStyle = "#1386eb";
        context.fillRect(0,372, 800, 31);
        context.fillStyle = ""
circulo()
        function circulo() {
        context.beginPath();
        context.strokeStyle = "yellow";
        context.lineWidth = 3;
        context.arc(180, 130, 50, 0, 2 * Math.PI);
        context.stroke();
        context.fillStyle = "yellow"
        context.fill();
        
   }

