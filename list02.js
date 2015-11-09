window.onload=function change(){
	var oSet=document.getElementById("Set");
	var oDiv=document.getElementById("Box");
	var oRed=document.getElementById("Red");
	var oGreen=document.getElementById("Green");
	var oBlue=document.getElementById("Blue");
	var oWtwo=document.getElementById("Wtwo");
	var oWthree=document.getElementById("Wthree");
	var oWfour=document.getElementById("Wfour");
	var oHtwo=document.getElementById("Htwo");
	var oHthree=document.getElementById("Hthree");
	var oHfour=document.getElementById("Hfour");
	var oReset=document.getElementById("Reset");
	var oChange=document.getElementById("Change");
	var oSure=document.getElementById("Sure");
	// var oBody=document.getElementById("Body");

	oSet.onclick=change;
	oSure.onclick=hide;
	oRed.onclick=red;
	oGreen.onclick=green;
	oBlue.onclick=blue;
	oWtwo.onclick=wtwo;
	oWthree.onclick=wthree;
	oWfour.onclick=wfour;
	oHtwo.onclick=htwo;
	oHthree.onclick=hthree;
	oHfour.onclick=hfour;
	oReset.onclick=reset;

	function hide(){
		oChange.style.display="none";
	}
	function change(){
		oChange.style.display="block";
		// oBody.style.background="yellow";
	}
	function reset(){
		oDiv.style.background="#f6eb9e";
		oDiv.style.width="50px";
		oDiv.style.height="50px";
	}
	function red(){
		oDiv.style.background="red";
	}
	function green(){
		oDiv.style.background="green";
	}
	function blue(){
		oDiv.style.background="blue";
	}
	function wtwo(){
		oDiv.style.width="100px";
	}
	function wthree(){
		oDiv.style.width="200px";
	}
	function wfour(){
		oDiv.style.width="300px";
	}
	function htwo(){
		oDiv.style.height="100px";
	}
	function hthree(){
		oDiv.style.height="200px";
	}
	function hfour(){
		oDiv.style.height="300px";
	}
}
