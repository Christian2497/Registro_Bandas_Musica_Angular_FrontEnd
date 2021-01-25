import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'; 


import { HomeComponent } from './components/home/home.component';
import { BandasComponent } from './components/bandas/bandas.component';
import { BandasDetalleComponent } from './components/bandas-detalle/bandas-detalle.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'bandas', component: BandasComponent},
    {path: 'bandas/:id', component: BandasDetalleComponent},
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);