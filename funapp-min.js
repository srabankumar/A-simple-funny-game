$(document).ready(function(){function e(){y.fillStyle="rgb(0,0,255)",y.clearRect(n.x,n.y,n.w,n.h),y.fillStyle="rgb(0,0,255)",y.fillRect(300,0,300,560),y.strokeStyle="rgb(0,255,0)",y.lineWidth=5,y.beginPath(),y.moveTo(300,420),y.lineTo(600,420),y.stroke(),y.moveTo(300,280),y.lineTo(600,280),y.stroke(),y.moveTo(300,140),y.lineTo(600,140),y.stroke(),y.lineWidth=1,y.moveTo(125,355),y.bezierCurveTo(350,380,100,450,290,545),y.stroke(),y.closePath()}function t(){y.font="30px Verdana",y.fillStyle="rgb(255,100,20)",y.save(),y.fillStyle="rgb(0,255,0)",y.save(),y.font="20px Verdana",y.fillStyle="rgb(120,200,100)",y.save(),y.restore(),y.fillText("Created by : Sraban",600,500),y.restore(),y.fillText("HIT THE BUTTON",250,200),y.restore(),y.fillText("KNOW YOUR STRENGTH",250,50),y.fillText("-----------------------------",250,100)}function l(){y.clearRect(0,0,w,g),r=new Image,r.src="button.png",$("#img2").show(),y.fillStyle="#000",y.fillRect(290,540,10,10),o=new Image,o.src="ball.png",n=new d(430,550,30,30),s=new m(100,310,50,50),e(),$(o).load(function(){y.drawImage(o,n.x,n.y,n.w,n.h)}),$(r).load(function(){y.drawImage(r,s.x,s.y,s.w,s.h)})}function i(){1==T&&(e(),n.y+=n.vy,y.drawImage(o,n.x,n.y,n.w,n.h),a(),setTimeout(i,20))}function a(){y.font="30px Bold Verdana",y.fillStyle="#000",y.save(),y.fillStyle="#FF0000",y.save(),n.last=n.y+n.h,n.last==x&&(n.vy=0,h=1,c=0,T=0,$("#reset").show(),n.last>=420&&n.last<560&&h&&(y.restore(),y.fillRect(300,420,300,140),y.restore(),n.y>460?y.fillText("WEAK",300,n.y-50):y.fillText("WEAK",300,n.y+50),y.drawImage(o,n.x,n.y,n.w,n.h)),n.last>=280&&n.last<420&&h&&(y.restore(),y.fillRect(300,280,300,140),y.restore(),n.y>320?y.fillText("AVERAGE",300,n.y-50):y.fillText("AVERAGE",300,n.y+50),y.drawImage(o,n.x,n.y,n.w,n.h)),n.last>=140&&n.last<280&&h&&(y.restore(),y.fillRect(300,140,300,140),y.restore(),n.y>180?y.fillText("STRONG",300,n.y-50):y.fillText("STRONG",300,n.y+50),y.drawImage(o,n.x,n.y,n.w,n.h)),n.last>=0&&n.last<140&&h&&(y.restore(),y.fillRect(300,0,300,140),y.restore(),n.y>320?y.fillText("SUPER STRONG",300,n.y-50):y.fillText("SUPER STRONG",300,n.y+50),y.drawImage(o,n.x,n.y,n.w,n.h)))}var o,r,n,s,f=$("#mycanvas"),y=f.get(0).getContext("2d"),h=0,c=1,T=1,g=f.height(),w=f.width(),x=Math.floor(g*Math.random()),d=function(e,t,l,i){this.x=e,this.y=t,this.w=l,this.h=i,this.vy=-1,this.last=0},m=function(e,t,l,i){this.x=e,this.y=t,this.w=l,this.h=i};$(window).mousemove(function(e){1==c&&$("#img2").css({left:e.pageX,top:e.pageY})}),$(window).click(function(e){T=1,e.pageX+s.w<=s.x+s.w&&e.pageX+30>s.x&&e.pageY+s.h<s.y+s.h&&e.pageY+25>s.y&&1==T&&i()}),$("#reset").click(function(e){e.preventDefault(),$(this).hide(),x=Math.floor(g*Math.random()),y.fillStyle="rgb(90,50,00)",y.clearRect(0,0,w,g),c=1,l()}),$("#play").click(function(e){e.preventDefault(),$(this).hide(),l()}),t()});