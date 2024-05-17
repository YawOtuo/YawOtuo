import emailjs from 'emailjs-com';



export function sendEmail(  fromName, message,fromEmail ) {
  // Email template parameters
  const templateParams = {
    from_name: fromName,
    from_email: fromEmail,
    message: message,
    // reply_to: replyTo,
  };

  // Send email
  emailjs.send("service_contact", "portfolio", templateParams, "user_O5PFSLdanSpVoOM2bj1Yq")
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
    })
    .catch((error) => {
      console.error('Failed to send email:', error);
    });
}
