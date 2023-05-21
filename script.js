//your JS code here. If required.

let width=window.innerWidth;
let height=window.innerHeight;
let ele=document.createElement("h1");
ele.innerText=`Width: ${width} and Height: ${height}`;
document.body.append(ele);

window.onresize=function(){
	ele.innerText=`Width: ${width} and Height: ${height}`
};

