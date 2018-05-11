document.getElementById("color").addEventListener("change", function(){
    document.getElementById("preview").style.backgroundColor = color.value;
});
                                                 
    document.getElementById("number").addEventListener("click", function(){
       document.getElementById("range1").type = "Number"; 
       document.getElementById("range2").type = "Number";
       document.getElementById("range3").type = "Number";
       document.getElementById("range4").type = "Number"; 
    }); 

   document.getElementById("range").addEventListener("click", function(){
       document.getElementById("range1").type = "Range"; 
       document.getElementById("range2").type = "Range";
       document.getElementById("range3").type = "Range";
       document.getElementById("range4").type = "Range"; 
    });



document.getElementById("range1").addEventListener("change", function(){
   document.getElementById("hair").style.width = document.getElementById("range1").value + "%";
});

document.getElementById("range2").addEventListener("change", function(){
   document.getElementById("eyes").style.width = document.getElementById("range2").value + "%";
});

document.getElementById("range3").addEventListener("change", function(){
   document.getElementById("nose").style.width = document.getElementById("range3").value + "%";
});

document.getElementById("range4").addEventListener("change", function(){
   document.getElementById("mouth").style.width = document.getElementById("range4").value + "%";
});


document.getElementById("plus").addEventListener("click", function(){
   createFace(); 
});

document.getElementById("random").addEventListener("click", function(){
   randomFace(); 
});

var num = 0;
function createFace() {
    
    num++;
    var newDiv = document.createElement("div");
    newDiv.className = "divC";
    newDiv.style.backgroundColor = document.getElementById("preview").style.backgroundColor;
    newDiv.id = num;
    newDiv.addEventListener("click", function(){
       removeDiv(newDiv.id); 
    });
    
    var newImg1 = document.createElement("img");
    var newImg2 = document.createElement("img");
    var newImg3 = document.createElement("img");
    var newImg4 = document.createElement("img");
    
    newImg1.src = document.getElementById("hair").src;
    newImg1.className = "items"; 
    newImg1.style.cssText = document.getElementById("hair").style.cssText;
    newDiv.appendChild(newImg1);
    
    
    newImg2.src = document.getElementById("eyes").src;
    newImg2.className = "items"
    newImg2.style.cssText=document.getElementById("eyes").style.cssText;
    newDiv.appendChild(newImg2);
    
    
    newImg3.src = document.getElementById("nose").src;
    newImg3.className = "items";
    newImg3.style.cssText = document.getElementById("nose").style.cssText;
    newDiv.appendChild(newImg3);
    
    
    newImg4.src = document.getElementById("mouth").src;
    newImg4.className = "items";
    newImg4.style.cssText = document.getElementById("mouth").style.cssText;
    newDiv.appendChild(newImg4);
    
    document.getElementById("display").appendChild(newDiv);
}





/*THIS IS THE PART WHERE I NEDED HELP*/

function randomFace() {
    var Img1 = Math.round(Math.random()*2)+1,
        Img2 = Math.round(Math.random()*2)+1,
        Img3 = Math.round(Math.random()*2)+1,
        Img4 = Math.round(Math.random()*2)+1,
        backR = Math.round(Math.random()*255),
        backG = Math.round(Math.random()*255),
        backB = Math.round(Math.random()*255);
    
    var hair = Math.round(Math.random()*70),
        eyes = Math.round(Math.random()*40),
        nose = Math.round(Math.random()*30),
        mouth = Math.round(Math.random()*35);
    
    document.getElementById("preview").style.backgroundColor = "rgb("+backR+","+backG+","+backB+")"
    
    document.getElementById("hair").src = "img/hair" + Img1 +".png";
    document.getElementById("eyes").src = "img/eyes" + Img2 +".png";
    document.getElementById("nose").src = "img/nose" + Img3 +".png";
    document.getElementById("mouth").src = "img/mouth" + Img4 +".png";
    
    document.getElementById("hair").style.width = hair +"%";
    document.getElementById("eyes").style.width = eyes +"%";
    document.getElementById("nose").style.width = nose +"%";
    document.getElementById("mouth").style.width = mouth +"%";
    
    document.getElementById("range1").value = hair;
    document.getElementById("range2").value = eyes;
    document.getElementById("range3").value = nose;
    document.getElementById("range4").value = mouth;
}


function changeType(type) {
    document.getElementById("range1").type = type;
    document.getElementById("range2").type = type;
    document.getElementById("range3").type = type;
    document.getElementById("range4").type = type;
}

document.getElementById("auto").addEventListener("click", function(){
   var Interval = setInterval(function() {
       randomFace();
       createFace();
   },500);
    document.getElementById("stop").addEventListener("click", function(){
       clearInterval(Interval); 
    });
});