function inchToFeet(){
	var input = document.getElementById("inch").value;
	var result = input/12;
	document.getElementById("result").innerHTML= result + " " + 'Feet!';
}