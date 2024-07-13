let firstImg = document.querySelector(".one");
let leftDiv = document.querySelector(".left");
let secondImg = document.querySelector(".two");
let topDiv = document.querySelector(".cardOne");
let thridImg = document.querySelector(".three");
let bottomDiv = document.querySelector(".cardTwo");
let fourImg = document.querySelector(".four");
let rightDiv = document.querySelector(".right");
firstImg.onclick = function(){
    firstImg.style.display = "none";
    let firstClone = firstImg.cloneNode(true);
    leftDiv.appendChild(firstClone);
    firstClone.style.cssText = "display:unset";
    leftDiv.style.cssText = "border-top: unset";
    firstClone.onclick = function(){
        firstClone.style.display = "none";
        firstImg.style.display = "block";
        leftDiv.style.cssText = "border-top: block";
    }
}
secondImg.onclick = function(){
    secondImg.style.display = "none";
    let secondClone = secondImg.cloneNode(true);
    topDiv.appendChild(secondClone);
    secondClone.style.cssText = "display:unset";
    topDiv.style.cssText = "border-top: unset";
    secondClone.onclick = function(){
        secondClone.style.display = "none";
        secondImg.style.display = "block";
        topDiv.style.cssText = "border-top: block";
    }
}
thridImg.onclick = function(){
    thridImg.style.display = "none";
    let thridClone = thridImg.cloneNode(true);
    bottomDiv.appendChild(thridClone);
    thridClone.style.cssText = "display:unset";
    bottomDiv.style.cssText = "border-top: unset";
    thridClone.onclick = function(){
        thridClone.style.display = "none";
        thridImg.style.display = "block";
        bottomDiv.style.cssText = "border-top: block";
    }
}
fourImg.onclick = function(){
    fourImg.style.display = "none";
    let fourClone = fourImg.cloneNode(true);
    rightDiv.appendChild(fourClone);
    fourClone.style.cssText = "display:unset";
    rightDiv.style.cssText = "border-top: unset";
    fourClone.onclick = function(){
        fourClone.style.display = "none";
        fourImg.style.display = "block";
        rightDiv.style.cssText = "border-top: block";
    }
}
let myP = document.querySelector(".title");
setInterval(addColor , 6000)
function addColor(){
    myP.style.color = "blue"
} 
setInterval(removeColor , 5000)
function removeColor(){
    myP.style.color = "red";
}
