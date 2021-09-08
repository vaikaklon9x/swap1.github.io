function convert(){
	let input=document.querySelectorAll("input");
	let C=input[0].value;
	let outFut=Number(C*(9/5)+32);
	input[1].value=outFut;
	var cal=C+"* 9/5 + 32"+"="+outFut;
	input[2].value = cal;
}
function reset() {
	let input=document.querySelectorAll("input");
	input[0].value = 0;
	input[1].value = " ";
	input[2].value = " ";
}