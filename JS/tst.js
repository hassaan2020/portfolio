function myFunction() {
    if(document.getElementById("mList").style.height === 'auto'){
        document.getElementById("mList").style.height = '0px';
    }else {
        document.getElementById("mList").style.height = 'auto';

    }
  }

function sendMail(){
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    }
     emailjs.send("service_9puwvio", "template_5dqvcx3", parms).then(alert("Email sent successfully!!"));
}