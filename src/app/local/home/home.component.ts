import { Component } from '@angular/core';
import { ExclusivService } from 'src/app/servec/exclusiv.service';

import { PoliticalapiService } from 'src/app/servec/politicalapi.service';
import { SportapiService } from 'src/app/servec/sportapi.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
home!:any;
politic!:any;
sport!:any;

constructor(public servic :SportapiService,public serv : PoliticalapiService, public servis :ExclusivService){
this.serv.get().subscribe((Data)=>{
  this.politic=Data
});

this.servic.get().subscribe((data)=>{
 this.sport =data
});

this.servis.get().subscribe((dete)=>{
  this.home=dete
})
localStorage.clear();
}

}
