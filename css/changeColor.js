function changeBG() {
	// body...
	var body = document.getElementById('body1');
	if (body.style.backgroundColor != 'white') {
		body.style.backgroundColor = 'white';
	}else {
		// alert('else');	
		body.style.backgroundColor = 'lightblue';
	}

}