import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostSharingPrivateComponent } from './components/csinfo-private/csinfo-private.component';
import { CostSharingPublicComponent } from './components/csinfo-public/csinfo-public.component';
import { HomeComponent } from './components/home/home.component';
import { NetworkComponent } from './components/network/network.component';
import { CategoryDetailsComponent } from './components/category-details/category-details.component';

const routes: Routes = [
  { path: 'costsharing-private', component: CostSharingPrivateComponent },
  { path: 'costsharing-public', component: CostSharingPublicComponent },
  { path: 'network', component: NetworkComponent },
  {path: 'category-details', component: CategoryDetailsComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
