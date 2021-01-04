import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path:'auth',component:AuthComponent}

]

@NgModule({

  imports:[RouterModule.forRoot(appRoutes,{useHash:false})],
  exports:[RouterModule]
})
export class AppRouting{

}
