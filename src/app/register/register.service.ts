import {Injectable} from '@angular/core';
import {GenericService} from "../common/generic.service";
import {Http} from "@angular/http";

@Injectable()
export class RegisterService extends GenericService
{
  constructor(private httpR: Http)
  {
    super(httpR);
  }

  getMail(aMail: string)
  {
    const MAIL_URL : string = 'http://localhost:8080/calendar/validate/mail/';

    return this.getM(MAIL_URL + aMail);
  }
}
