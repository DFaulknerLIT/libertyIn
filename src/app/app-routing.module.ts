import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {DiscoverComponent} from "./components/discover/discover.component";
import {DiscoverResultsComponent} from "./components/discover-results/discover-results.component";

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'discover',
    component: DiscoverComponent
  },
  {
    path:'discover/results',
    component: DiscoverResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
