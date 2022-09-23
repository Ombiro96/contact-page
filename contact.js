function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "...",
        Password: "...",
        To: '...',
        From: document.querySelector("#email").value,
        Subject: "Contact enquiry",
        Body: "Name: " + document.querySelector("#name").value
            + "<br>Email: " + document.querySelector("#email").value
            + "<br>Message: " + document.querySelector("#message").value
    }).then(
        message => alert("Message sent")
    );
}