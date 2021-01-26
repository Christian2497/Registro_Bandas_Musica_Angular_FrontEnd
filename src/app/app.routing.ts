import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'; 


import { HomeComponent } from './components/home/home.component';
import { BandasComponent } from './components/bandas/bandas.component';
import { BandasDetalleComponent } from './components/bandas-detalle/bandas-detalle.component';
import { SearchComponent } from './components/search/search.component';
import { FormularioComponent } from './components/formulario/formulario.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'bandas', component: BandasComponent},
    {path: 'bandas/:id', component: BandasDetalleComponent},
    {path: 'buscar/:search', component: SearchComponent},
    {path: 'formulario', component: FormularioComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);