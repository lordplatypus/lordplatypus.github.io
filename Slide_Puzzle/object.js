///////////////////////////////////////////////////////////////////////////////////////////////////
///object - abstract
///////////////////////////////////////////////////////////////////////////////////////////////////

var object = function(image, positionX, positionY, width, height, textureX, textureY, textureWidth, textureHeight, ID, tag)
{
    //
    this.image_ = image; //image object
    this.positionX_ = positionX; //world position x
    this.positionY_ = positionY; //world position y
    this.targetX_ = positionX; 
    this.targetY_ = positionY;
    this.width_ = width; //width of the world object
    this.height_ = height; //height of the world object
    this.textureX_ = textureX; //texture position x (where to make the cutout)
    this.textureY_ = textureY; //texture position y
    this.textureWidth_ = textureWidth; //width of the texture cutout
    this.textureHeight_ = textureHeight; //height of the texture cutout
    this.ID_ = ID; //number ID - this correlates to its correct position (i.e. 0 = top left corner, 1 = one position to the right, etc)
    this.tag_ = tag; //position ID - current position (if tag == ID then the object is in the correct position)

    this.display_ = true; //display the object?
    this.displayNumber_; //display the number (correct position)?
    this.displayOutline_; //display outlines when in correct position?
    this.numberSize_;
    this.numberColor_;
    this.outlineSize_;
    this.outlineColor_;
}

object.prototype.Update = function(delta_time)
{}

object.prototype.Draw = function(ctx)
{}

object.prototype.Translate = function(positionX, positionY, tag)
{//Updates the 'image cutout' position
    this.targetX_ = positionX; //x position of where the object will end up
    this.targetY_ = positionY; //y position of where the object will end up
    this.tag_ = tag; //update the tag to its new position
}

object.prototype.Display = function(display)
{
    this.display_ = display;
}

object.prototype.DisplayNumber = function(displayNumber)
{
    this.displayNumber_ = displayNumber;
}

object.prototype.SetNumberSize = function(numberSize)
{
    this.numberSize_ = numberSize;
}

object.prototype.SetNumberColor = function(numberColor)
{
    this.numberColor_ = numberColor;
}

object.prototype.DisplayOutline = function(displayOutline)
{
    this.displayOutline_ = displayOutline;
}

object.prototype.SetOutlineSize = function(outlineSize)
{
    this.outlineSize_ = outlineSize;
}

object.prototype.SetOutlineColor = function(outlineColor)
{
    this.outlineColor_ = outlineColor;
}

object.prototype.Lerp = function(time)
{
    this.positionX_ = (1 - time) * this.positionX_ + time * this.targetX_;
    this.positionY_ = (1 - time) * this.positionY_ + time * this.targetY_;
}

///////////////////////////////////////////////////////////////////////////////////////////////////
///box - child of object
///////////////////////////////////////////////////////////////////////////////////////////////////

var box_object = function(image, positionX, positionY, width, height, textureX, textureY, textureWidth, textureHeight, ID, tag, 
    displayNumber, numberSize, numberColor, displayOutline, outlineSize, outlineColor)
{
    object.apply(this, arguments);

    this.displayNumber_ = displayNumber; //display the number (correct position)?
    this.displayOutline_ = displayOutline; //display outlines when in correct position?
    this.numberSize_ = numberSize;
    this.numberColor_ = numberColor;
    this.outlineSize_ = outlineSize;
    this.outlineColor_ = outlineColor;
}
box_object.prototype = Object.create(object.prototype);
//box_object.prototype.constructor = box;

box_object.prototype.Update = function(delta_time)
{    
    this.Lerp(delta_time * 10.0);
}

box_object.prototype.Draw = function(ctx)
{//Draw the 'image cutout' on the canvas
    if (!this.display_) return;

    ctx.drawImage(this.image_, this.textureX_, this.textureY_, this.textureWidth_, this.textureHeight_, 
                this.positionX_, this.positionY_, this.width_, this.height_);

    if (this.displayNumber_)
    {
        ctx.font = this.numberSize_ + "px'MSPゴシック'";
        ctx.fillStyle = this.numberColor_;
        ctx.fillText(this.ID_, this.positionX_, this.positionY_ + this.numberSize_);
    }

    if (this.displayOutline_ && this.ID_ === this.tag_)
    {
        ctx.lineWidth = this.outlineSize_;
        ctx.strokeStyle = this.outlineColor_;
        ctx.strokeRect(this.positionX_ + this.outlineSize_ / 2, this.positionY_ + this.outlineSize_ / 2, this.width_ - this.outlineSize_, this.height_ - this.outlineSize_);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////
///image - child of object
///////////////////////////////////////////////////////////////////////////////////////////////////

var image_object = function(image, positionX, positionY, width, height, textureX, textureY, textureWidth, textureHeight, ID, tag, 
    display)
{
    object.apply(this, arguments);

    this.display_ = display;
}
image_object.prototype = Object.create(object.prototype);
//image_object.prototype.constructor = box;

image_object.prototype.Update = function(delta_time)
{}

image_object.prototype.Draw = function(ctx)
{
    if (!this.display_) return;

    ctx.drawImage(this.image_, this.textureX_, this.textureY_, this.textureWidth_, this.textureHeight_, 
                  this.positionX_, this.positionY_, this.width_, this.height_);
}