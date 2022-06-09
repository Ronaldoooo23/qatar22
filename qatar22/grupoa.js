var lienzo = document.getElementById("grupa");
        var context = lienzo.getContext("2d");

        context.beginPath();
        context.fillStyle = "white";
        context.fillRect(0, 0, 300, 400);
        context.fillStyle = "#7a1f3a";
        context.fillRect(300, 0, 800, 400);
        context.moveTo(250,30);
        context.lineTo(300,0);
        context.lineTo(300,70);

        context.moveTo(250,105);
        context.lineTo(300,70);
        context.lineTo(300,140);

        context.moveTo(250,180);
        context.lineTo(300,140);
        context.lineTo(300,210);

        context.moveTo(250,250);
        context.lineTo(300,210);
        context.lineTo(300,280);

        context.moveTo(250,320);
        context.lineTo(300,280);
        context.lineTo(300,350);

        context.moveTo(250,385);
        context.lineTo(300,350);
        context.lineTo(300,400);
        context.fill();

var lienzo2 = document.getElementById("grupa2");
        var ctx2 = lienzo2.getContext("2d");

        ctx2.fillStyle = "#fcec03";
        ctx2.fillRect(0, 0, 800, 200);
        ctx2.fillStyle = "#13165c";
        ctx2.fillRect(0, 200, 800, 100);
        ctx2.fillStyle = "#ff0505";
        ctx2.fillRect(0, 300, 800, 100);

var lienzo3 = document.getElementById("grupa3");
        var ctx3 = lienzo3.getContext("2d");
        
        
    
        ctx3.fillStyle = "#00701e";
        ctx3.fillRect(0, 0, 266, 400)
        ctx3.fillStyle = "#e0e012";
        ctx3.fillRect(266, 0, 266, 400)
        ctx3.fillStyle = "#bf0202";
        ctx3.fillRect(532, 0, 266, 400)
       
var lienzo4 = document.getElementById("grupa4");
        var ctx4 = lienzo4.getContext("2d");

        ctx4.fillStyle = "#13165c";
        ctx4.fillRect(0, 0, 800, 133);
        ctx4.fillStyle = "white";
        ctx4.fillRect(0, 133, 800, 150);
        ctx4.fillStyle = "red";
        ctx4.fillRect(0, 266, 800, 400);

        



