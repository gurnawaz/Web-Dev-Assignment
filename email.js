const form = document.querySelector('form');
const fullName = document.getElementsByName("name")[0];
const email = document.getElementsByName("email")[0];
const query = document.getElementsByName("message")[0];

function sendEmail() {
    const bodyMessage = `Fullname: ${fullName.value}`<br>
    `Email: ${email.value}`<br>
    `Query: ${query.value}`;
    Email.send({
        Host:"smtp.gmail.com",
        Username: "riderbeast161@gmail.com",
        Password: "3EF565CE5EFA19319681F27D04AC7CF50133",
        To: 'riderbeast161@gmail.com',
        From: "riderbeast161@gmail.com",
        Subject: "This is the subject",
        Body: bodyMessage
    }).then(
        message => {

            if(message=='OK')
                {
                    alert('Thanks for the query');
                }
                else{
                    console.error(message);
                    alert('There is an error');

                }
        }
    );
}
form.addEventListener("Submit",(e) =>
 {
        e.preventDefault();
        sendEmail();
    });
