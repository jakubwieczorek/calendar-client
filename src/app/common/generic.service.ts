import {Http} from "@angular/http";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Injectable} from "@angular/core";

@Injectable()
export class GenericService
{
  constructor(private http: Http)
  {

  }

  protected getM(aUrl: string)
  {
    return this.http.get(aUrl).map((res) =>
    {
      return res;
    });
  }
}
