import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from '../../services/global';
import { BandaService } from '../../services/banda.service';
import { Banda } from '../../models/banda';

@Component({
  selector: 'app-bandas-detalle',
  templateUrl: './bandas-detalle.component.html',
  styleUrls: ['./bandas-detalle.component.css'],
  providers: [BandaService],
})
export class BandasDetalleComponent implements OnInit {

  public banda: Banda;
  public url: string;

  constructor(
    private _bandaService: BandaService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    this.url = Global.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._bandaService.getBanda(id).subscribe(
        response => {
          if(response.banda){
            this.banda = response.banda
          }else{
            this._router.navigate(['/']);
          }
        },
        error => {
          console.log(error)
          this._router.navigate(['/']);
        }
      )
    });
  }

}
