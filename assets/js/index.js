function sendMail(){
    
    let params = {
        name: document.getElementById("name").value ,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
    }

    const serviceID = "service_44ckhbk";
    const templateID = "template_7x0ojv6";

    emailjs.send(serviceID,templateID,params)
    .then(
        (res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("successdully !");
        })
    .catch((err) => console.log(err));
}