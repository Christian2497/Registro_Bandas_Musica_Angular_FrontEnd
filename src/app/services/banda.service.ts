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

    /* public bandas: Banda[];

    constructor(){
        this.bandas = [
            new Banda("The Rolling Stones", "Es una banda británica de rock originaria de Londres. La banda se formó en abril de 19622​ por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts e Ian Stewart.", 1962 , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwIGZZ6S61Y4iSd4AHsWBJ3dcl1_VwL-3Gg&usqp=CAU'),
            new Banda("Led Zeppelin", "Fue un grupo británico de hard rock fundado en 1968 por el guitarrista Jimmy Page, quien había pertenecido a The Yardbirds. La banda estuvo integrada por John Paul Jones como bajista y teclista, el vocalista Robert Plant y John Bonham a la batería", 1968 , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLkFoN3-u_owarTMOU5zOER_QEdJZwjCZ0Rg&usqp=CAU'),
            new Banda("Queen", "Es una banda británica de rock formada en 1970 en Londres por el cantante y pianista Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon.", 1970 , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-rAPr9vvmZha6HxiH0M7vyHcyTspDMSk66w&usqp=CAU'),
            new Banda("Pink Floyd", "Fue una banda de rock británica, fundada en Londres en 1965. Es considerada un icono cultural del siglo xx y una de las bandas más influyentes y aclamadas en la historia de la música, que obtuvo gran popularidad gracias a su música psicodélica que evolucionó hacia el rock progresivo y rock sinfónico con el paso del tiempo.", 1965 , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWoG0eyOo3gAu5ihiAysFzkRVRoTC9BGtt8w&usqp=CAU'),
            new Banda("Deep Purple", "Es una banda británica de hard rock formada en 1968 en Hertford, Reino Unido. Está considerada como una de las pioneras de dicho subgénero, y los pioneros del heavy metal junto a Led Zeppelin y Black Sabbath. Su música ha incorporado elementos del rock progresivo, rock sinfónico, rock psicodélico, blues rock, funk rock, britpop y la música clásica. Deep Purple ha vendido más de 120 millones de discos en todo el mundo.", 1968 , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnXfB_pgR26gUG4hbHNm5YelKZf2o64z0a0Q&usqp=CAU'),
            new Banda("AC/DC", "Es una banda de hard rock australiana, formada en 1973 en Australia por los hermanos escoceses Malcolm y Angus Young.", 1973 , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cErJoLGO2eKTExmTGfB9Egrm8HvY4OHfEQ&usqp=CAU'),
            new Banda("The Ramones", "Fue una banda de punk formada en Forest Hills, en el distrito de Queens", 1974 , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthpimUzFd66lSqk7Tb4dqg7gRznxQVM-lig&usqp=CAU'),
            new Banda("Kiss", "Es una banda estadounidense de rock formada en Nueva York en enero de 1973 por el bajista Gene Simmons y el guitarrista Paul Stanley, a los que más tarde se unirían el batería Peter Criss y el guitarrista Ace Frehley.", 1973 , 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5hTYy-QwTPTkymVseX9lAXK8tDLCOJRorA&usqp=CAU')
          ];
    }

    getBandas(){
        return this.bandas;
    } */
}