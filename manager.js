var manager = function()
{
    this.objects_ = [];
}

manager.prototype.Update = function()
{
    this.objects_.forEach(object => object.Update());
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

manager.prototype.DisplayOutlines = function(displayOutlines)
{
    this.objects_.forEach(object => object.DisplayOutline(displayOutlines));
}

manager.prototype.Clear = function()
{
    this.objects_ = [];
}