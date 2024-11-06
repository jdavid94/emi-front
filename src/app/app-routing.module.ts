import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmiFormComponent } from './components/emi-form/emi-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/emi-form', pathMatch: 'full' },
  { path: 'emi-form', component: EmiFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
