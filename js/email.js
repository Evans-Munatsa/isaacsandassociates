function sendMail() {
	let params = {
		name : document.getElementById("name").value
		email : document.getElementById("email").value
		subject : document.getElementById("subject").value
		message : document.getElementById("message").value
	}

	emailjs.send("service_4p1nfnh", "template_x8cdz4j", params).then(alert("Email Sent!!"))
}