const FROM_ADDRESS = 'onlyforhomeassigment@gmail.com';
const SUBJECT = 'your OS URL confirmation mail';
const URL = 'http://localhost:3000'

export default class Mail {

    public from: string;
    public to: string;
    public subject: string;
    public html: string;
    public token: string;

    constructor(reciverAddress: string, osURL: string, token: string) {
        this.from = FROM_ADDRESS;
        this.to = reciverAddress;
        this.subject = SUBJECT;
        this.token = token;
        this.html = `<h3>WE GOT A REQUEST FOR ADDING THE NEXT URL "${osURL}" WITH THIS MAIL TO OUR,
        IF ITS INDEED YOU - PLEASE CONFIRM YOUR MAIL</h3></br>
        <a href="${URL}/confirm-mail/${token}"><button>CONFIRM ADDING HERE</button></a>`;
    }
}


