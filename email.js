const fs = require('fs');
const path = require ('path');
const CRED_PATH = require('./credentials.json')
const nodemailer = require('nodemailer');
const  directoryPath = require('./test1.js')


/*const getEmailTransporter = () =>{
    const EMAIL_HOST = 'email-smtp.us-east-1.amazonaws.com'
    const SMTP_EMAIL_USER = 'AKIAJNWGE32KNDQH6ROA'
    const SMTP_EMAIL_PASSWORD = 'BB2VGsuJODKShmfAbd9y3KLa8qrYSS83zicYC3ZtKCDL'

    let transporter = nodemailer.createTransport({
        service: EMAIL_HOST,
        port: '587',
        auth:{
            user: SMTP_EMAIL_USER,
            pass: SMTP_EMAIL_PASSWORD
        },
        secureConnection: false,
        tls: {
            ciphers: 'SSLv3'
        },
        requireTLS: true
    });
    return transporter
}*/

let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    port: '25',
    auth:{
        user:'agustin@theeye.io',
        pass:'Automation1994!'
    },
    tls: {
        rejectUnauthorized: false
    }

})

//const ADRESS_SUPPORT = 'support@theeye.io'
//const ADRESS_ADMINISTRATION = 'administracion@theeye.io'
let HelperOptions = {
    from: '"agustin Moreno" <agustin@theeye.io',
    to: 'agustin@theeye.io',
    Subject: 'Hola',
    text:'Bokita el mas grande papa',
    filename: 'pdf',
    path:directoryPath
    
    

};
transporter.sendMail(HelperOptions,(error,info)=>{
        if(error){
            return console.log(error);
        }
        console.log("email enviado");
        console.log(info);

});
//directoryPath.directoryPath();

