import { Component, OnInit } from '@angular/core';
import { Banda } from '../../models/banda';
import { BandaService } from '../../services/banda.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [BandaService]
})
export class FormularioComponent implements OnInit {

  public banda: Banda;
  public status: string;

  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: "50",
    uploadApi: {
      url: Global.url+'upload-image/'
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para la banda',
      afterUploadMsg_success: 'Successfully Uploaded!',
      afterUploadMsg_error: 'Upload Failed!'
    }
  }

  constructor(
    private _bandaService: BandaService
  ) { 
    this.banda = new Banda('', '', '', 0, null);
  }

  ngOnInit(){
  }

  onSubmit(){
    this._bandaService.create(this.banda).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success';
          this.banda = response.banda;
          console.log(response)
        }else{
          this.status = 'error'
        }
      },
      error => {
        console.log(error);
        this.status = 'error'
      }
    );
  }

}
