import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
//import { PagenotComponent } from './components/pagenot/pagenot.component';

const routes: Routes = [
  { path:'',component:LoginComponent},
  //{ path:'/admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  //{ path:'/user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)},
  //{ path:'', redirectTo:'',pathMatch:'full'},
 // { path:'**', component:PagenotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
