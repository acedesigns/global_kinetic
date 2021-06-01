/* =======================================================
 *
 * Created by anele on 2020/05/28.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})


export class HttpService {

    appConfig = {
        apiUrl      : 'https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather/',
        apiKEY      : '53f9d8e4213222cf517d86dc406d67fc',
        headers     : new HttpHeaders({
            'Content-Type' : 'application/json',
            'Accept'			: 'application/json',
            'X-Requested-With' 	: 'XMLHttpRequest',
            'Access-Control-Allow-Origin'	: '*',
            'Access-Control-Allow-Methods'	: 'POST, GET, OPTIONS, PUT, DELETE',
            'Access-Control-Allow-Headers'	: '*',
        }),
    };


    constructor( private http: HttpClient ) {}


    getData(location: any ): Observable<any> {
        return this.http.get(
            this.appConfig.apiUrl +
            '?lat='+ location.lat+
            '&lon='+location.lng +
            '&units=metric'+
            '&appid='+this.appConfig.apiKEY, {headers : this.appConfig.headers});
    }


    postData(verb: string, data: any ): Observable<any> {
        return this.http.post( this.appConfig.apiUrl + verb, data, {headers : this.appConfig.headers});
    }

}

