function clickTruman (){
	pic1.style.display = "block";
	truman.style.display = "none";

}

function clickBook (){
	pic2.style.display = "block";
	book.style.display = "none";

}

function clickRadio(){
	pic3.style.display = "block";
	radio.style.display = "none";

}

function clickTv (){
	pic4.style.display = "block";
	tv.style.display = "none";

}

function clickPhone (){
	pic5.style.display = "block";
	phone.style.display = "none";

}

function clickLaptop(){
	pic6.style.display = "block";
	laptop.style.display = "none";

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

	pic1.style.display = "none";
	pic2.style.display = "none";
	pic3.style.display = "none";
	pic4.style.display = "none";
	pic5.style.display = "none";
	pic6.style.display = "none";

	book.style.display = "block";

} else if (media === "s2") {
	truman.style.display = "none";
	book.style.display = "none";
	phone.style.display = "none";
	tv.style.display = "none";
	laptop.style.display = "none";

	pic1.style.display = "none";
	pic2.style.display = "none";
	pic3.style.display = "none";
	pic4.style.display = "none";
	pic5.style.display = "none";
	pic6.style.display = "none";


	radio.style.display = "block";
} else if (media ==="s3") {
	truman.style.display = "none";
	book.style.display = "none";
	radio.style.display = "none";
	phone.style.display = "none";
	laptop.style.display = "none";

	pic1.style.display = "none";
	pic2.style.display = "none";
	pic3.style.display = "none";
	pic4.style.display = "none";
	pic5.style.display = "none";
	pic6.style.display = "none";

	tv.style.display = "block";
} else if (media ==="s4"){
	truman.style.display = "none";
	book.style.display = "none";
	radio.style.display = "none";
	laptop.style.display = "none";
	tv.style.display = "none";

	pic1.style.display = "none";
	pic2.style.display = "none";
	pic3.style.display = "none";
	pic4.style.display = "none";
	pic5.style.display = "none";
	pic6.style.display = "none";

	phone.style.display = "block";
} else if (media ==="s5"){
	truman.style.display = "none";
	book.style.display = "none";
	radio.style.display = "none";
	phone.style.display = "none";
	tv.style.display = "none";	

	pic1.style.display = "none";
	pic2.style.display = "none";
	pic3.style.display = "none";
	pic4.style.display = "none";
	pic5.style.display = "none";
	pic6.style.display = "none";

	laptop.style.display = "block"
} else {
	book.style.display = "none";
	radio.style.display = "none";
	phone.style.display = "none";
	tv.style.display = "none";	
	laptop.style.display = "none";

	pic1.style.display = "none";
	pic2.style.display = "none";
	pic3.style.display = "none";
	pic4.style.display = "none";
	pic5.style.display = "none";
	pic6.style.display = "none";

	truman.style.display = "block";
}
}