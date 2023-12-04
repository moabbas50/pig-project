import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaveComponent } from './shared/nave/nave.component';
import { FooterComponent } from './shared/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './local/about/about.component';
import { SportsCreatComponent } from './admin/sports-creat/sports-creat.component';
import { SportsUpdateComponent } from './admin/sports-update/sports-update.component';
import { HomeComponent } from './local/home/home.component';
import { ShownewsComponent } from './local/shownews/shownews.component';
import { SportsNewsComponent } from './local/sports-news/sports-news.component';
import { PoliticNewsComponent } from './local/politic-news/politic-news.component';
import { HomeadminComponent } from './admin/homeadmin/homeadmin.component';
import { ListsportadminComponent } from './admin/listsportadmin/listsportadmin.component';
import { ExclusivComponent } from './local/exclusiv/exclusiv.component';
import { NaveadminComponent } from './shared/naveadmin/naveadmin.component';
import { CreatPoliticComponent } from './admin/politics/creat-politic/creat-politic.component';
import { UpdatePoliticComponent } from './admin/politics/update-politic/update-politic.component';
import { ListpoliticadminComponent } from './admin/politics/listpoliticadmin/listpoliticadmin.component';
import { CreatExclusivComponent } from './admin/exclusiv/creat-exclusiv/creat-exclusiv.component';
import { UpdateExclusivComponent } from './admin/exclusiv/update-exclusiv/update-exclusiv.component';
import { ListExclusivComponent } from './admin/exclusiv/list-exclusiv/list-exclusiv.component';
import { AdduserComponent } from './admin/user/adduser/adduser.component';
import { LoginComponent } from './admin/user/login/login.component'



@NgModule({
  declarations: [
    AppComponent,
    NaveComponent,
    FooterComponent,
    AboutComponent,
    SportsCreatComponent,
    SportsUpdateComponent,
    HomeComponent,
    ShownewsComponent,
    SportsNewsComponent,
    PoliticNewsComponent,
    HomeadminComponent,
    ListsportadminComponent,
    ExclusivComponent,
    NaveadminComponent,
    CreatPoliticComponent,
    UpdatePoliticComponent,
    ListpoliticadminComponent,
    CreatExclusivComponent,
    UpdateExclusivComponent,
    ListExclusivComponent,
    AdduserComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
