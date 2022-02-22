import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { HomeComponent } from "./pages/home/home.component";
import { ListPageComponent } from './pages/list-page/list-page.component';

const routes: Routes = [
  
  {path: '', component: HomeComponent},
  {path: 'list/:id', component: ListPageComponent },  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
