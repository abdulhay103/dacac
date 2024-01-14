import nodemailer from "nodemailer";

export async function SendMailer(toEmail, subject, text) {
    // Create Transporter
    let transpoter = nodemailer.createTransport({
        host: "mail.aerodevs.com",
        port: 465,
        secure: true,
        auth: {
            user: "info@aerodevs.com",
            pass: "N.P@2024@",
        },
        tls: { rejectUnauthorized: false },
    });

    //Prepair Mail
    let readyMail = {
        from: "MEC-Trade<info@aerodevs.com>",
        to: toEmail,
        subject: subject,
        text: text,
    };

    //Response Mail
    return await transpoter.sendMail(readyMail);
}
