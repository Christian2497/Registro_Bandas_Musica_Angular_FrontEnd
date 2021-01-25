import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BandasComponent } from './components/bandas/bandas.component';
import { HomeComponent } from './components/home/home.component';
import { BandasDetalleComponent } from './components/bandas-detalle/bandas-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    BandasComponent,
    HomeComponent,
    BandasDetalleComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
