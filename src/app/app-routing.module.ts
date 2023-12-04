import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './local/home/home.component';
import { AboutComponent } from './local/about/about.component';
import { SportsCreatComponent } from './admin/sports-creat/sports-creat.component';
import { ShownewsComponent } from './local/shownews/shownews.component';
import { SportsNewsComponent } from './local/sports-news/sports-news.component';
import { SportsUpdateComponent } from './admin/sports-update/sports-update.component';
import { ListsportadminComponent } from './admin/listsportadmin/listsportadmin.component';
import { HomeadminComponent } from './admin/homeadmin/homeadmin.component';
import { CreatPoliticComponent } from './admin/politics/creat-politic/creat-politic.component';
import { UpdatePoliticComponent } from './admin/politics/update-politic/update-politic.component';
import { ListpoliticadminComponent } from './admin/politics/listpoliticadmin/listpoliticadmin.component';
import { CreatExclusivComponent } from './admin/exclusiv/creat-exclusiv/creat-exclusiv.component';
import { UpdateExclusivComponent } from './admin/exclusiv/update-exclusiv/update-exclusiv.component';
import { ListExclusivComponent } from './admin/exclusiv/list-exclusiv/list-exclusiv.component';
import { ExclusivComponent } from './local/exclusiv/exclusiv.component';
import { PoliticNewsComponent } from './local/politic-news/politic-news.component';
import { AdduserComponent } from './admin/user/adduser/adduser.component';
import { LoginComponent } from './admin/user/login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'homeadmin',component:HomeadminComponent},
  {path:'sportsnews',component:SportsNewsComponent},
  {path:'politcs',component:PoliticNewsComponent},
  {path:'exclusiv',component:ExclusivComponent},
  {path:'shownews/:id/:it',component:ShownewsComponent},
  {path:'about',component:AboutComponent},
  // sport c
  {path:'sports/admin/creat',component:SportsCreatComponent},
  {path:'sports/admin/Update/:id',component:SportsUpdateComponent},
  {path:'listsportadmin',component:ListsportadminComponent},
  // politic c
  {path:'politic/admin/creat',component:CreatPoliticComponent},
  {path:'politic/admin/Update/:id',component:UpdatePoliticComponent},
  {path:'listpoliticadmin',component:ListpoliticadminComponent},
  // eclusiv c
  {path:'exclusiv/admin/creat',component:CreatExclusivComponent},
  {path:'exclusiv/admin/Update/:id',component:UpdateExclusivComponent},
  {path:'listexclusivadmin',component:ListExclusivComponent},
  // add/ login
  {path:'creat/user/admin',component:AdduserComponent},
  {path:'login/user/admin',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
