var CountButton = document.getElementById("CountButton");

function countFunction() {
	var B = parseInt(document.getElementById("B").value);
	var C = parseInt(document.getElementById("C").value);
	var D = parseInt(document.getElementById("D").value);
	var E = parseInt(document.getElementById("E").value);
	var F = parseInt(document.getElementById("F").value);
	var G = parseInt(document.getElementById("G").value);
	var Operator = document.getElementById("Operator").value;
	var result;

	if (!B || !C || !D || !E || !F || !G) {
		document.getElementById("eText").textcontent = "Please input B, C, D, E, F, G";

		return null;
	}

	/*if (!B || !C) {
		document.getElementById("eText").textcontent = "Please input a B, C";

		return null;
	}*/

	if (!Operator) {
		document.getElementById("eText").textcontent = "Please pick an operator";		

		return null;
	}

	if (Operator === "plus") {
		document.getElementById("rText").innerHTML = "Question : " + " " + B + " " + " " + C + "/" + D + " " + " + " + " " + E + " " + " " + F + "/" + G + " " + "<br>";
		result = (B + (C/D)) + (E + (F/G));
	}

	if (Operator === "min") {
		document.getElementById("rText").innerHTML = "Question : " + " " + B + " " + " " + C + "/" + D + " " + " - " + " " + E + " " + " " + F + "/" + G + " " + "<br>";
		result = (B + (C/D)) - (E + (F/G));
	}

	if (Operator === "mult") {
		document.getElementById("rText").innerHTML = "Question : " + " " + B + " " + " " + C + "/" + D + " " + " * " + " " + E + " " + " " + F + "/" + G + " " + "<br>";
		result = (B + (C/D)) * (E + (F/G));
	}

	if (Operator === "div") {
		document.getElementById("rText").innerHTML = "Question : " + " " + B + " " + " " + C + "/" + D + " " + " / " + " " + E + " " + " " + F + "/" + G + " " + "<br>";
		result = (B + (C/D)) / (E + (F/G));
	}

	/*if (Operator === "plus") {
		document.getElementById("rText").innerHTML = "Question : " + B + " + " + C + "<br>";
		result = B + C;
	}

	if (Operator === "min") {
		document.getElementById("rText").innerHTML = "Question : " + B + " - " + C + "<br>";
		result = B - C;
	}*/
	document.getElementById("rText").innerHTML += "Result : " + result;
}

CountButton.addEventListener("click", countFunction);