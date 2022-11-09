function Initialize()
{
    box = document.getElementById("box");
    boxText = document.getElementById("boxText");

    bgColor = document.getElementById("bgColor");
    textColor = document.getElementById("textColor");
    textSize = document.getElementById("textSize");
    boxWidth = document.getElementById("boxWidth");
    boxHeight = document.getElementById("boxHeight");
    borderRadius = document.getElementById("borderRadius");
}

function SetBgColor()
{
    var box = document.getElementById("box");
    var bgColor = document.getElementById("bgColor");
    
    var color = bgColor.value;

    box.style.background = color;
}

function SetTextColor()
{
    var boxText = document.getElementById("boxText");
    var textColor = document.getElementById("textColor");
    
    var color = textColor.value;

    boxText.style.color = color;
}

function SetTextSize()
{
    var boxText = document.getElementById("boxText");
    var textSize = document.getElementById("textSize");
    
    var size = textSize.value;

    boxText.style.fontSize = size + "px";
}

function SetBoxWidth()
{
    var box = document.getElementById("box");
    var boxWidth = document.getElementById("boxWidth");
    
    var width = boxWidth.value;

    box.style.width = width + "px";
}

function SetBoxHeight()
{
    var box = document.getElementById("box");
    var boxHeight = document.getElementById("boxHeight");
    
    var height = boxHeight.value;

    box.style.height = height + "px";
}

function SetBorderRadius()
{
    var box = document.getElementById("box");
    var borderRadius = document.getElementById("borderRadius");
    
    var radius = borderRadius.value;

    box.style.borderRadius = radius + "px";
}