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
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
