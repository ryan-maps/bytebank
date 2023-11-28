import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from '@angular/router';
import NovaTransferenciaComponent from "./nova-transferencia/nova-transferencia.component";
import { ExtratoIndexComponent } from "./extrato-index/extrato-index.component";

export const routes: Routes = [
    {path: '', redirectTo: 'extrato', pathMatch: 'full'},
    {path: 'extrato', component: ExtratoIndexComponent},
    {path: 'nova-transferencia', component: NovaTransferenciaComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}