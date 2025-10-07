function sendEmail(){
    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("message").value,
        Subject : document.getElementById("Subject").value,
        message : document.getElementById("message").value
    };

    emailjs.send("service_eg203h3","template_6sp56fn",params).then(alert( "Message Sent Successfully"));
}