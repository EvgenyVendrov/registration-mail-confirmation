import nodemailer from 'nodemailer';
import Mail from '../models/Mail.model';
import { AuthData } from '../interfaces/Routes.interface';

const MAIL_SERVICE = 'gmail';
const AUTH_DATA = {
    user: 'onlyforconfirmation123@gmail.com',
    pass: '@@@zazagaga88'
};

export default class MailSender{

    private transport: nodemailer.Transporter|null;
    private static instance: MailSender;

    private constructor(mailService: string, authData: AuthData) {
        try {
            this.transport = nodemailer.createTransport({
                service: mailService,
                auth: authData
            });
        }
        catch (err) {
            this.transport = null;
            console.log('SERVER ERROR IN CREATING TRANSPORT FOR MAIL');
        }
        
    }

    public static getInstance(): MailSender {
        if (!MailSender.instance) {
            MailSender.instance = new MailSender(MAIL_SERVICE,AUTH_DATA);
        }

        return MailSender.instance;
    }

    public sendMail = (mailToSend: Mail): Promise<boolean> => {
        if (this.transport) { 
            return this.transport.sendMail(mailToSend)
                .then((info) => {
                    console.log(info);
                    return true;
                }
                )
                .catch((err) => {
                    console.log('MAIL SENDER ERROR:', err);
                    return false;
                }
                );
        }
        else {
            return new Promise((resolve) => { resolve(false); })
        }
        
    };

}
