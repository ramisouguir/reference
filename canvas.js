const c = document.getElementById("canvas");
const canvas = c.getContext("2d");

function makeCircle()
{
    canvas.beginPath();
    canvas.arc(200, 200, 40, 0, 2 * Math.PI);
    canvas.stroke();
}

function main()
{
    makeCircle();
}

main();