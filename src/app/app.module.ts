import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFileUploaderModule } from 'angular-file-uploader';

import { AppComponent } from './app.component';
import { BandasComponent } from './components/bandas/bandas.component';
import { HomeComponent } from './components/home/home.component';
import { BandasDetalleComponent } from './components/bandas-detalle/bandas-detalle.component';
import { SearchComponent } from './components/search/search.component';
import { FormularioComponent } from './components/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    BandasComponent,
    HomeComponent,
    BandasDetalleComponent,
    SearchComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    AngularFileUploaderModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
