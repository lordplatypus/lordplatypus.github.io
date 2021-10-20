var object = function(image, positionX, positionY, width, height, textureX, textureY, textureWidth, textureHeight, ID, tag)
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
    this.tag_ = tag; //position ID - current position (if tag == ID then the object is in the correct position)

    this.display_ = true;
    this.displayNumber_ = false;
    this.displayOutline_ = false;
    this.targetX_ = positionX;
    this.targetY_ = positionY;
}

object.prototype.Translate = function(positionX, positionY, tag)
{//Updates the 'image cutout' position
    this.targetX_ = positionX;
    this.targetY_ = positionY;
    this.tag_ = tag;
}

object.prototype.Update = function()
{
    //if (Math.floor(this.positionX_) !== Math.floor(this.targetX_) && Math.floor(this.positionY_) !== Math.floor(this.targetY_)); 
    
    this.Lerp(0.25);
}

object.prototype.Draw = function(ctx)
{//Draw the 'image cutout' on the canvas
    if (!this.display_) return;

    ctx.drawImage(this.image_, this.textureX_, this.textureY_, this.textureWidth_, this.textureHeight_, 
                               this.positionX_, this.positionY_, this.width_, this.height_);

    if (this.displayNumber_)
    {
        ctx.font = 20 + "px'MSPゴシック'";
        ctx.fillStyle = "#888888";
        ctx.fillText(this.ID_, this.positionX_, this.positionY_ + 20);
    }

    if (this.displayOutline_ && this.ID_ === this.tag_)
    {
        ctx.strokeStyle = 'green';
        ctx.strokeRect(this.positionX_, this.positionY_, this.width_, this.height_);
    }
}

object.prototype.Display = function(display)
{
    this.display_ = display;
}

object.prototype.DisplayNumber = function(displayNumber)
{
    this.displayNumber_ = displayNumber;
}

object.prototype.DisplayOutline = function(displayOutline)
{
    this.displayOutline_ = displayOutline;
}

object.prototype.Lerp = function(time)
{
    this.positionX_ = (1 - time) * this.positionX_ + time * this.targetX_;
    this.positionY_ = (1 - time) * this.positionY_ + time * this.targetY_;
}