import { Injectable } from '@angular/core';
import { Banda } from '../models/banda';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';


@Injectable()
export class BandaService {

    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }


    getBandas(): Observable<any> {
        return this._http.get(this.url + 'bandas')
    }


    getBanda(bandaId):Observable<any>{
        return this._http.get(this.url+'bandas/'+bandaId);
    }

    search(searchString):Observable<any>{
        return this._http.get(this.url+'search/'+searchString);
    }

    create(banda):Observable<any>{
        let params = JSON.stringify(banda);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url+'save', params, {headers: headers});
    }

    delete(id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url+'bandas/'+id, {headers: headers});
    }
}