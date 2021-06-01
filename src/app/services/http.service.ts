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

//let serviceUrl: String = 'https://api.openweathermap.org/data/2.5/weather/';
//let apiKey: String = '53f9d8e4213222cf517d86dc406d67fc';


export class HttpService {

    appConfig = {
        apiUrl      : 'https://jsonplaceholder.typicode.com/',
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


    getData(verb: string ): Observable<any> {
        return this.http.get( this.appConfig.apiUrl + verb, {headers : this.appConfig.headers});
    }


    postData(verb: string, data: any ): Observable<any> {
        return this.http.post( this.appConfig.apiUrl + verb, data, {headers : this.appConfig.headers});
    }

}
