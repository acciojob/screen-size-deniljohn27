//your JS code here. If required.
let ele=document.createElement("h1");
let div=document.getElementById("sizeInfo");
ele.innerText=`Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
div.append(ele);

window.onresize=function(){
	ele.innerText=`Width: ${window.innerWidth} and Height: ${window.innerHeight}`
};

