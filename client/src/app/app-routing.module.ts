import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionsComponent } from './components/actions/actions.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
{path:"addTask" , component: ActionsComponent},
{path:"**" , component: HomepageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
