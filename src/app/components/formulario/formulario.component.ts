import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public banda: any;

  constructor() { 
    this.banda = {
      title: '',
      year: '',
      description: '',
      image: '',
    }
  }

  ngOnInit(){
  }

  onSubmit(){
    console.log(this.banda);
  }

}
