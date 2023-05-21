//your JS code here. If required.
let ele=document.createElement("h1");
ele.innerText=`Width: ${window.innerWidth} and Height: ${window.innerHeight}`;
document.body.append(ele);

window.onresize=function(){
	ele.innerText=`Width: ${window.innerWidth} and Height: ${window.innerHeight}`
};

