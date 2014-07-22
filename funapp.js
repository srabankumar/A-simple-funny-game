$(document).ready(function(){
	var can = $("#mycanvas");
	var con = can.get(0).getContext('2d');
	var ballImg ;
	var btnImg  ;
    var ball ;
    var btn ;
    var flag = 0;
    var imgFlag = 1;
    var gameState  =1;
    var canHeight = can.height();
    var canWidth = can.width();
    var finalY = Math.floor(canHeight * Math.random()) ;
    var ballShape = function(x,y,w,h)
    {
    	this.x = x;
    	this.y = y;
    	this.w = w;
    	this.h = h;
    	this.vy = -1;
    	this.last = 0;
    }

    var btnShape = function(x,y,w,h)
    {
    	this.x = x;
    	this.y = y;
    	this.w = w;
    	this.h = h;

    }

    function drawImg()
    {
    	
    	
    	con.fillStyle = "rgb(0,0,255)" ;
		con.clearRect(ball.x,ball.y,ball.w,ball.h);
		con.fillStyle = "rgb(0,0,255)";
		con.fillRect(300,0,300,560);
		con.strokeStyle="rgb(0,255,0)";
		con.lineWidth = 5;
		con.beginPath();
		con.moveTo(300,420);
		con.lineTo(600,420);
		con.stroke();
		con.moveTo(300,280);
		con.lineTo(600,280);
		con.stroke();
		con.moveTo(300,140);
		con.lineTo(600,140);
		con.stroke();
		con.lineWidth = 1;
	    con.moveTo(125,355);
		con.bezierCurveTo(350,380,100,450,290,545);
		con.stroke();
		con.closePath();
    }
   
	function init()
	{
		con.font = "30px Verdana";
		con.fillStyle = "rgb(255,100,20)";
		con.save();
		con.fillStyle = "rgb(0,255,0)";
		con.save();
		con.font = "20px Verdana";
		con.fillStyle = "rgb(120,200,100)";
		con.save();
		con.restore();
		con.fillText("Created by : Sraban",600,500);
		con.restore();
		con.fillText("HIT THE BUTTON",250,200)
		con.restore();
		con.fillText("KNOW YOUR STRENGTH",250,50);
		con.fillText("-----------------------------",250,100);
		
        //startGame();
	}
	function startGame()
	{
		con.clearRect(0,0,canWidth,canHeight);
		btnImg = new Image();
		btnImg.src = "button.png" ;
		$("#img2").show();
		con.fillStyle = "#000";
		con.fillRect(290,540,10,10);
		ballImg = new Image();
        ballImg.src = "ball.png";
		ball = new ballShape(430,550,30,30);
		btn = new btnShape(100,310,50,50)
		drawImg();
        $(ballImg).load(function(){
			con.drawImage(ballImg,ball.x,ball.y,ball.w,ball.h); 
		});
		$(btnImg).load(function(){
			con.drawImage(btnImg,btn.x,btn.y,btn.w,btn.h);
		})
		
    }

	function animate()
	{
		if(gameState ==1)
		{
			drawImg();
		    ball.y += ball.vy ;
		    con.drawImage(ballImg,ball.x,ball.y,ball.w,ball.h);
		    check();
		    setTimeout(animate,20);
		}
		
	}

	function check()
	{
		con.font = "30px Bold Verdana";
		con.fillStyle = "#000";
		con.save();
		con.fillStyle = "#FF0000";
		con.save();
		ball.last = ball.y + ball.h ;
		if(ball.last == finalY)
		{
			ball.vy = 0;
			flag = 1 ;
			imgFlag = 0;
			gameState = 0;
			$("#reset").show();

			if(ball.last >= 420 && ball.last<560)
			{
					if(flag)
					{
						con.restore();
						con.fillRect(300,420,300,140);
						con.restore();
						if(ball.y > 460)
						{
							con.fillText("WEAK",300,ball.y-50);
						}
						else
						{
                            con.fillText("WEAK",300,ball.y+50);
						}
				        
				        con.drawImage(ballImg,ball.x,ball.y,ball.w,ball.h);
					}
			
		    }
		    if(ball.last >= 280 && ball.last<420)
		    {
					if(flag)
					{
						con.restore();
						con.fillRect(300,280,300,140);
						con.restore();
				        if(ball.y > 320)
						{
							con.fillText("AVERAGE",300,ball.y-50);
						}
						else
						{
                            con.fillText("AVERAGE",300,ball.y+50);
						}
				        con.drawImage(ballImg,ball.x,ball.y,ball.w,ball.h);

					}
					
		    }
		    if(ball.last >= 140 && ball.last<280)
		    {
					if(flag)
					{
						con.restore();
						con.fillRect(300,140,300,140);
						con.restore();
				        if(ball.y > 180)
						{
							con.fillText("STRONG",300,ball.y-50);
						}
						else
						{
                            con.fillText("STRONG",300,ball.y+50);
						}
				        con.drawImage(ballImg,ball.x,ball.y,ball.w,ball.h);

					}
		    }
		    if(ball.last >= 0 && ball.last<140)
		    {
					if(flag)
					{
						con.restore();
						con.fillRect(300,0,300,140);
						con.restore();
				        if(ball.y > 320)
						{
							con.fillText("SUPER STRONG",300,ball.y-50);
						}
						else
						{
                            con.fillText("SUPER STRONG",300,ball.y+50);
						}
				        con.drawImage(ballImg,ball.x,ball.y,ball.w,ball.h);

					}
		    }
		}
		
	}

	$(window).mousemove(function(e)
		{
			if(imgFlag == 1)
			{
				$("#img2").css({"left":e.pageX,"top":e.pageY});
			}
			
		});
	$(window).click(function(e){
		gameState = 1;
			if((e.pageX + btn.w )<= (btn.x+btn.w) && (e.pageX+30) > btn.x 
				&& (e.pageY + btn.h) < (btn.y+btn.h) && (e.pageY+25)>btn.y)
			{
				if(gameState == 1)
				    {
					animate();
				    }
				
				
			}
		});

	$("#reset").click(function(e){
         e.preventDefault();
         $(this).hide();
         finalY = Math.floor(canHeight * Math.random()) ;
         con.fillStyle = "rgb(90,50,00)";
         con.clearRect(0,0,canWidth,canHeight);
         imgFlag = 1;
         startGame();
	});
    
    $("#play").click(function(e){
    	e.preventDefault();
    	$(this).hide();
    	startGame();
    })
    init();
});