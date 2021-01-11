# Quel classes ?
    - Ardoise
    - Palette
    - Stylo
    - APP !

# class Ardoise
    Props :
        - this.canvas
        - this.ctx
        - this.width
        - this.height
        - this.isDrawing
        - this.ctx.lineJoin
        - this.ctx.lineCap
        - this.ctx.fillStyle

    Methods :
        - erase()
        - BONUS : save()

# class Palette
    Props :
        - this.canvas
        - this.ctx      
        - this.width
		- this.height      

    Methods :
        - build()
        - getColor()
        - BONUS : zoomColor()

# class Stylo
    Props :
        - this.posX
        - this.posY
        - this.color
        - this.thickness  

    Methods :
        - setColor()
        - setThickness()
        - stopDrawing()
        - startDrawing()
        - draw()

# class App
    Props :
        - this.ardoise
        - this.palette
        - this.stylo

    Methods :
        - initEvents()
