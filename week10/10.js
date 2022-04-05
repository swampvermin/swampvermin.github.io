function mouseOver() {
	document.truman.src = "truman.jpg"
}

function mouseOut() {
	document.truman.src= "electric.jpg"
}

function changeDiv(){
	const div = document.getElementById('select');
	let media = div.value;

	if (media ==="s1"){
	truman.style.display = "none";
	radio.style.display = "none";
	phone.style.display = "none";
	laptop.style.display = "none"
	tv.style.display = "none";

	book.style.display = "block";

} else if (media === "s2") {
	truman.style.display = "none";
	book.style.display = "none";
	phone.style.display = "none";
	tv.style.display = "none";
	laptop.style.display = "none";

	radio.style.display = "block";
} else if (media ==="s3") {
	truman.style.display = "none";
	book.style.display = "none";
	radio.style.display = "none";
	phone.style.display = "none";
	laptop.style.display = "none";

	tv.style.display = "block";
} else if (media ==="s4"){
	truman.style.display = "none";
	book.style.display = "none";
	radio.style.display = "none";
	laptop.style.display = "none";
	tv.style.display = "none";

	phone.style.display = "block";
} else if (media ==="s5"){
	truman.style.display = "none";
	book.style.display = "none";
	radio.style.display = "none";
	phone.style.display = "none";
	tv.style.display = "none";	

	laptop.style.display = "block"
} else {
	book.style.display = "none";
	radio.style.display = "none";
	phone.style.display = "none";
	tv.style.display = "none";	
	laptop.style.display = "none";

	truman.style.display = "block";
}
}