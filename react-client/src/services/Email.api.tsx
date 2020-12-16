import axios from "axios";
import { BASE_URL } from "../models/Routes.model";

export class EmailApi {

  confirmEmail(token: string): Promise<string> {
    return axios
      .get(`${BASE_URL}/confirm-mail/${token}`)
      .then(() => `YOUR MAIL IS VALIDATED! THANK YOU.`)
      .catch((err) => {
        if (err.response) {
          return this.handleError(err.response);
        } else {
          return this.handleError(500);
        }
      });
  }

  private handleError(error: any): string {
    switch(error.status) {
        case 405: return "LINK ISN'T VALID";
        case 400: return "THIS LINK IS MOST LIKELY ALREADY USED";
        default: return "SERVER ERROR - PLEASE TRY AGAIN LATER";
    }
  }
}
