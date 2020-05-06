var timer_id;
var speed = 50;
var period = 40;
var vicky;
var vicky_speed = 0; /*Change these because it will be relative to where it is on your page*/
var vicky_position = 10; /*This as well*/


function animate ()
{
    vicky_position += vicky_speed;
    if (vicky_position < 0) vicky_position = 0;
    if (vicky_position > 200) vicky_position = 200;
    vicky.style.left = vicky_position+'px';
}


function move(direction)
{
    if (timer_id) stop();
    vicky_speed = speed * period/1000 * direction;
    timer_id = setInterval (animate, period);
}


function stop()
{
    clearInterval (timer_id);
    timer_id = null;
}


function init()
{

    vicky = document.getElementById ("vicky"); 
    animate(); 
}

window.onload =init; 