const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function makeCircle(x,y,alpha,color)
{
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.globalAlpha = alpha;
    ctx.fill();
    ctx.lineWidth = 0;
    ctx.strokeStyle = color;
    ctx.stroke();
}

function generateRandomColor()
{
    var hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    var color = "#"+hex[Math.floor(Math.random()*16)]+hex[Math.floor(Math.random()*16)]+hex[Math.floor(Math.random()*16)]+hex[Math.floor(Math.random()*16)]+hex[Math.floor(Math.random()*16)]+hex[Math.floor(Math.random()*16)];
    return color;
}

function fillArrays()
{
    for(var i =0; i<20; i++)
    {
        xPos[i] = Math.floor(Math.random()*window.innerWidth);
        yPos[i] = Math.floor(Math.random()*window.innerHeight);
        startingAlphas[i] = Math.random()*.7;
        colors[i] = generateRandomColor();
        var randomX;
        var randomY;

        while(1==1)
            {
                randomX = Math.floor(Math.random()*11-5);
                if(randomX!=0)
                {
                    break;
                }
            }
        while(1==1)
            {
                randomY = Math.floor(Math.random()*11-5);
                if(randomY!=0)
                {
                    //makes sure that the value is not zero because then the circle will either go only vertically, only horizontally, or nowhere at all
                    break;
                }
            }
        
        vectorX[i] = randomX;
        vectorY[i] = randomY;

        if(Math.floor(Math.random()*2)==0)
        {
            goingUp[i] = false;
        }
        else
        {
            goingUp[i] = true;
        }
     }
}


var xPos = new Array();
var yPos = new Array();
//starting coordinates for circles.

var startingAlphas = new Array();
//starting globalAlpha for circles

var vectorX = new Array();
var vectorY = new Array();
//determines the path that the circles will take

var goingUp = new Array();
//determines if the alpha is going up or down

var colors = new Array();
//determines color of circle

function drawCircles()
{
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight)
    for(var i =0; i<20; i++)
    {
        makeCircle(xPos[i], yPos[i], startingAlphas[i], colors[i]);

        if(xPos[i]>window.innerWidth+30)
        {
            vectorX[i] = vectorX[i]*-1;
        }
        if(yPos[i]>window.innerHeight+30)
        {
            vectorY[i] = vectorY[i]*-1;
        }
        if(xPos[i]<-30)
        {
            vectorX[i] = vectorX[i]*-1;
        }
        if(yPos[i]<-30)
        {
            vectorY[i] = vectorY[i]*-1;
        }

        xPos[i]+=vectorX[i];
        yPos[i]+=vectorY[i];

        if(goingUp[i] && startingAlphas[i]<=.69)
        {
            startingAlphas[i]+=.01;
        }
        else if (goingUp[i])
        {
            goingUp[i] = false;
        }
        else if (!goingUp[i] && startingAlphas[i]>=.01)
        {
            startingAlphas[i]-=.01;
        }
        else
        {
            goingUp[i] = true;
        }

        
    }
}

var mainInterval;

function main()
{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    fillArrays();
    mainInterval = setInterval(drawCircles, 50);
}

window.onresize = function()
{
    clearInterval(mainInterval)
    main();
}

main();