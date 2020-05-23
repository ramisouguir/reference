const c = document.getElementById("canvas");
const canvas = c.getContext("2d");

function makeCircle()
{
    canvas.beginPath();
    canvas.arc(200, 400, 50, 0, 2 * Math.PI);
    canvas.stroke();
}

function main()
{
    c.width = screen.availWidth;
    c.height = screen.availHeight;
    makeCircle();
}

main();