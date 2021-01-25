import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Banda } from '../../models/banda';
import { BandaService } from '../../services/banda.service';

@Component({
  selector: 'app-bandas',
  templateUrl: './bandas.component.html',
  styleUrls: ['./bandas.component.css'],
  providers: [BandaService]
})

export class BandasComponent implements OnInit{

  public bandas: Banda[];

  constructor(
    private _bandaService: BandaService,
  ) {}

  ngOnInit() {
    this._bandaService.getBandas().subscribe(
      response => {
        if(response.bandas){
          this.bandas = response.bandas;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
