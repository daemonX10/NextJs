import nodemailer from 'nodemailer';

export const sendMail = async ( {email, emailtype, userI } : any ) => {
    try {
        const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
            user: "maddison53@ethereal.email",
            pass: "jn7jnAPss4f63QBp6D",
        },
        });

        const mailOptions = {
            from : 'damodarryadav@gmail.com' ,
            to : email,
            subject : emailtype == 'verify' ? 'Verify your email' : 'Reset your password',
            html : "<h1>Click on the link to verify your email</h1> <a href='http://localhost:3000/verify-email?userId=1'>Click here</a>"
        };

        const mailResponse = await transporter.sendMail(mailOptions);
        return mailResponse;
        
    } catch (error : any) {
        throw new Error(error.message);
    }
}