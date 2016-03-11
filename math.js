
function add(u , v)
{
	return {x: u.x + v.x , y:u.y + v.y , z:u.z + v.z};	
}


function substract(u , v)
{
	return {x: u.x - v.x , y:u.y - v.y , z:u.z - v.z};	
}

function mul(u , k)
{
	return {x: u.x*k , y:u.y*k , z:u.z*k};	
}

function dot(u , v)
{
	return u.x*v.x+u.y*v.y+u.z*v.z;	
}

function cross( u , v)
{
	return { x:u.y*v.z-u.z*v.y , y: u.z*v.x-u.x*v.z , z:u.x*v.y-u.y*v.x};
}

function length(u)
{
	return Math.sqrt(u.x*u.x + u.y*u.y + u.z*u.z);	
}

function normalize(u)
{
	var len = length(u);
	u.x /= len;	
	u.y /= len;	
	u.z /= len;	
}

function reflect(i, n) {

    // v = i - 2 * dot(i, n) * n
    return add(i, mul(n, -2 * dot(i, n)));
}

function saturate(x) {
    if (x < 0)
        x = 0;
    else
    if (x > 1)
        x = 1;

    return x;
}

