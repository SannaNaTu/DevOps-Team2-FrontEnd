import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InvoiceComponent} from './invoice/invoice.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/invoice', pathMatch: 'full'},
  {path: 'invoice', component: InvoiceComponent},
  {path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
