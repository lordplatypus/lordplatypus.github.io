var object = function(image, positionX, positionY, width, height, textureX, textureY, textureWidth, textureHeight, ID)
{
    this.image_ = image; //image object
    this.positionX_ = positionX; //world position x
    this.positionY_ = positionY; //world position y
    this.width_ = width; //width of the world object
    this.height_ = height; //height of the world object
    this.textureX_ = textureX; //texture position x (where to make the cutout)
    this.textureY_ = textureY; //texture position y
    this.textureWidth_ = textureWidth; //width of the texture cutout
    this.textureHeight_ = textureHeight; //height of the texture cutout
    this.ID_ = ID; //number ID - this correlates to its correct position (i.e. 0 = top left corner, 1 = one position to the right, etc)
}

object.prototype.Translate = function(positionX, positionY)
{//Updates the 'image cutout' position
    this.positionX_ = positionX;
    this.positionY_ = positionY;
}

object.prototype.Draw = function(ctx)
{//Draw the 'image cutout' on the canvas
    ctx.drawImage(this.image_, this.textureX_, this.textureY_, this.textureWidth_, this.textureHeight_, 
                               this.positionX_, this.positionY_, this.width_, this.height_);
}