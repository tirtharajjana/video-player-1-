var demo=function(x)
{
    "use strict";
    var input=x.target;
    var bg=document.getElementById("control");
    bg.style.backgroundImage="url(images/txt.jpg)";
    bg.style.backgroundSize="cover";
    var reder=new FileReader();
    reder.onload=function()
    {
         var filename=reder.result;
         var resul=document.getElementById("res");
         resul.src=filename;
         bg.style.display="none";
    };
    reder.readAsDataURL(input.files[0]);
};