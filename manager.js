var manager = function()
{
    this.objects_ = [];
}

manager.prototype.Update = function(delta_time)
{
    this.objects_.forEach(object => object.Update(delta_time));
}
manager.prototype.Draw = function(ctx)
{
    this.objects_.forEach(object => object.Draw(ctx));
}

manager.prototype.Add = function(object)
{
    this.objects_.push(object);
}

manager.prototype.SearchByID = function(ID)
{
    for (var i = 0; i < this.objects_.length; i++)
    {
        if (this.objects_[i].ID_ === ID) return this.objects_[i];
    }
}

manager.prototype.SearchByTag = function(tag)
{
    for (var i = 0; i < this.objects_.length; i++)
    {
        if (this.objects_[i].tag_ === tag) return this.objects_[i];
    }
}

manager.prototype.DisplayNumbers = function(displayNumbers)
{
    this.objects_.forEach(object => object.DisplayNumber(displayNumbers));
}

manager.prototype.SetNumberSize = function(numberSize)
{
    this.objects_.forEach(object => object.SetNumberSize(numberSize));
}

manager.prototype.SetNumberColor = function(numberColor)
{
    this.objects_.forEach(object => object.SetNumberColor(numberColor));
}

manager.prototype.DisplayOutlines = function(displayOutlines)
{
    this.objects_.forEach(object => object.DisplayOutline(displayOutlines));
}

manager.prototype.SetOutlineSize = function(outlineSize)
{
    this.objects_.forEach(object => object.SetOutlineSize(outlineSize));
}

manager.prototype.SetOutlineColor = function(outlineColor)
{
    this.objects_.forEach(object => object.SetOutlineColor(outlineColor));
}

manager.prototype.Clear = function()
{
    this.objects_ = [];
}