import {Injectable, OnInit} from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {GameInfo} from "./GameInfo";

@Injectable()
export class InstanceDataService {


  //private instanceUrl = 'http://localhost:8080/gameinfo';
  private instanceUrl = '/assets/json/gameinfo.json';

  constructor(private http: Http) { }

  /**
   *
   * @param port Webadmin port
   * @returns {Observable<R|T>}
   */
  getInstanceInfo(port:number): Observable<GameInfo> {
    // TODO real url
    return this.http.get(this.instanceUrl).map(this.extractData).catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return  body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
