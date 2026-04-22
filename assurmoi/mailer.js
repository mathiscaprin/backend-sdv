const nodemail = require("nodemailer");

const transporter = nodemailer.createTransport({
    host:process.env.MAIL_HOST,
    port : process.env.MAIL_PORT,
    secure : process.env.MAIL_SECURE,
    auth : {
        user : process.env.MAIL_USER,
        password : process.env.MAIL_PASSWORD
    }
});

const mail = () => {
    const result = transporter.sendMail({
        from : "",
        to : '',
        subject : '',
        text : '',
        html : "",
    });
    return result;
}


const mailTO = (to, subject, text) => {
    try{
        const result = transporter.sendMail({
            from : "",
            to : to,
            subject : subject,
            text : text,
            html : "",
        });
        console.log("mail sent to " + result.messageId);
        return result;
    }
    catch(err){
        console.log("error sending mail : " +err);
        return err;
    }
}

module.exports = {
    mail,
    mailTO
}