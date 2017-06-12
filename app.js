var g_id 	= 0,
hei_scr 	= window.innerHeight,
wid_scr 	= window.innerWidth,
y_scrl 		= window.pageYOffset,
x_scrl 		= window.pageXOffset,
rad_max		= Math.sqrt(wid_scr*wid_scr+hei_scr*hei_scr)/2,
num_star 	= 200,
estrelas	= new Array();

var Estrela = function(){
	var coe_tamanho = 0;
	var altura		= 0;
	var largura		= 0;
	var id 			= g_id;
	var x 			= Math.floor((Math.random()*wid_scr)+1);
	var y 			= Math.floor((Math.random()*hei_scr)+1);
	var r			= Math.random()*6.283;
	var velocidade 	= Math.floor((Math.random()*1)+1);
	//var velocidade 	= 10;
	var nome 		= "estrela_";
	var rad 		= 0;
	var radi 		= 0;
	var distancia	= 0;
	var cor 		= 0;


	this.getNomeId = function(){
		return nome+id;
	}

	this.movimentar = function(sLeft, sTop){
		document.getElementById(this.getNomeId()).style.top 	= sTop;
	 	document.getElementById(this.getNomeId()).style.left 	= sLeft;
	}

	this.aproximar = function(sWdh, sHgt) {
	  	document.getElementById(this.getNomeId()).style.width 	= sWdh;
	  	largura = sWdh; 
	 	document.getElementById(this.getNomeId()).style.height 	= sHgt;
	 	altura = sHgt;

	}

	this.apagar = function() {
	  	var d = document.getElementById(this.getNomeId());
	  	d.className = d.className + " apagar";
	}

	this.acender = function() {
	  	var d = document.getElementById(this.getNomeId());
	  	d.className = "estrelinha_"+cor;
	}

	this.getWidth = function(){
		return largura; 
	}

	this.getHeight = function(){
		return altura;
	}

	this.getDirecao = function(){
		if((x > (wid_scr/2) ) && (y > (hei_scr/2) )){
			r = Math.floor(((Math.random()*1.9) + 1)*100)/100;
		}

		if((x < (wid_scr/2) ) && (y > (hei_scr/2) )){
			r = Math.floor(((Math.random()*3.35) + 1)*100)/100;
			r = r > 1.9? r : r + 1.9;
		}

		if((x < (wid_scr/2) ) && (y < (hei_scr/2) )){
			r = Math.floor(((Math.random()*4.5) + 1)*100)/100;
			r = r > 3.35? r : r + 3.35;
		}

		if((x > (wid_scr/2) ) && (y < (hei_scr/2) )){
			r = Math.floor(((Math.random()*6.1) + 1)*100)/100;
			r = r > 4.5? r : r + 4.5;
		}

	}

	this.gerarEstrela = function(){
		//rad = Math.sqrt(Math.pow((y-hei_scr/2),2)+Math.pow((x-wid_scr/2),2))/rad_max*4+1;
		
		y 	= Math.floor((Math.random()*hei_scr)-4);
		x 	= Math.floor((Math.random()*wid_scr)-4);
		//y = hei_scr/2;
		//x 	= wid_scr/2;
		this.getDirecao();
		this.aproximar(1,1);
		this.movimentar(x+x_scrl,y+y_scrl);
		 

	}

	this.moverEstrela = function(){
		rad = Math.sqrt(Math.pow((y-hei_scr/2),2)+Math.pow((x-wid_scr/2),2))/rad_max*4+1;
		y 	= Math.floor((Math.random()*hei_scr)-4);
		x 	= Math.floor((Math.random()*wid_scr)-4);
		
		if ((x > wid_scr-rad*2) || (y < 0 ) || (y > hei_scr-rad*2) || (x < 0)){
			y 	= Math.floor((Math.random()*hei_scr)+1);
			x 	= Math.floor((Math.random()*wid_scr)+1);
			//y = hei_scr/2;
			//x 	= wid_scr/2;
			this.getDirecao();
			j = Math.floor((Math.random()*4)+1);
			this.aproximar(j,j);
			this.movimentar(x+x_scrl,y+y_scrl);
		 }else{
		 	
			this.aproximar(this.getWidth() + (velocidade/100),this.getHeight() + (velocidade/100));
			radi	= rad;
			this.movimentar(x+x_scrl,y+y_scrl);
		} 
	}

	this.defineCor = function(){
		cor = Math.floor((Math.random()*100)+1);

		if ((cor % 3) == 0){
			cor = 3;
		}else if((cor % 4) == 0){
			cor = 2;
		}else if((cor % 2) == 0){
			cor = 4;
		}else{
			cor = 1;
		}
	}

	this.defineCor();
	document.write("<div id="+this.getNomeId()+"  class = 'estrelinha_"+cor+"' style='z-index:-9000; position:absolute; width:1;height:1;'></div>");

	g_id++;

	this.gerarEstrela();

	
}


for (i = 0; i < num_star; i++){
	estrelas[i] = new Estrela();
}

function start_star(){
	i = Math.floor((Math.random()*num_star));
	estrelas[i].acender();
	estrelas[i].moverEstrela();
}

function piscar(){
	i = Math.floor((Math.random()*num_star));
	estrelas[i].apagar();	
	//estrelas[i].acender();	
}

starSpeed=setInterval('start_star()',5000);
starSpeed=setInterval('piscar()',2);

function mostrarTitle(){
	var titles 	= document.getElementById('titles');
	var quemsou = document.getElementById('quemsou');

	titles.style.display = 'block';
	quemsou.style.display = 'none';
}

function mostrarQuemSou(){
	var titles 	= document.getElementById('titles');
	var quemsou = document.getElementById('quemsou');

	titles.style.display = 'none';
	quemsou.style.display = 'block';
}
