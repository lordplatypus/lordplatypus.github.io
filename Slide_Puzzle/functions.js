function $(id)
{
    return document.getElementById(id);
}

var past = Date.now();
function delta_time()
{
    var now = Date.now(); //Grab the current time in milliseconds
    var delta_time_ = now - past; //subtract the past from now to get the time inbetween loops
    past = now; //set up the past for next iteration
    return delta_time_ / 1000.0; //convert milliseconds to seconds
}