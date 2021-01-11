// Classe Palette
class Palette {

	constructor(selector){
		this.canvas = document.querySelector(selector);
		this.ctx = this.canvas.getContext('2d');
		
		this.height = this.canvas.height;
		this.width = this.canvas.width;
					
		this.build();
	}
	
	build(){
		let gradient = this.ctx.createLinearGradient(0,0, this.width, 0);
		
		gradient.addColorStop(0,    'hsl(0,     100%,   50%)');
		gradient.addColorStop(0.20, 'hsl(60,    100%,   50%)');
		gradient.addColorStop(0.40, 'hsl(120,   100%,   50%)');
		gradient.addColorStop(0.60, 'hsl(180,   100%,   50%)');
		gradient.addColorStop(0.80, 'hsl(240,   100%,   50%)');
		gradient.addColorStop(1,    'hsl(300,   100%,   50%)');
		
		this.ctx.fillStyle = gradient;
		this.ctx.fillRect(0, 0, this.width, this.height);
		
		gradient = this.ctx.createLinearGradient(0,0,0, this.height);
		
		gradient.addColorStop(0,   'rgba(255, 255, 255, 1)');
		gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0)');
		gradient.addColorStop(0.6, 'rgba(0,     0,   0, 0)');
		gradient.addColorStop(1,   'rgba(0,     0,   0, 1)');
		
		this.ctx.fillStyle = gradient;
		this.ctx.fillRect(0, 0, this.width, this.height);
	}

	getColor(x, y) {
		var colorData = this.ctx.getImageData(x, y, 1, 1).data;

		var red   = colorData[0];
		var green = colorData[1];
		var blue  = colorData[2];

		return 'rgb('+ red +','+ green +','+ blue +')';
	}

	zoomColor(x, y) {
		var colorData = this.ctx.getImageData(x, y, 1, 1).data;

		var red   = colorData[0];
		var green = colorData[1];
		var blue  = colorData[2];

		document.querySelector('.zoom').style.display = "block";
		document.querySelector('.zoom').style.top = y + "px";
		document.querySelector('.zoom').style.left = x + "px";
		document.querySelector('.zoom').style.backgroundColor ='rgb('+ red +','+ green +','+ blue +')';
			
	}

}
