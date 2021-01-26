import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Banda } from '../../models/banda';
import { BandaService } from '../../services/banda.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [BandaService]
})
export class SearchComponent implements OnInit {

  public bandas : Banda[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _bandaService: BandaService
  ) { 

  }

  ngOnInit(){
    this._route.params.subscribe(params => {
      var search = params['search'];

      this._bandaService.search(search).subscribe(
        response => {
          if(response.bandas){
            this.bandas = response.bandas;
          }
        },
        error => {
          console.log(error);
        }
      )
    })
  }

}
