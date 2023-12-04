import { Component } from '@angular/core';
import { PoliticalapiService } from 'src/app/servec/politicalapi.service';

@Component({
  selector: 'app-politic-news',
  templateUrl: './politic-news.component.html',
  styleUrls: ['./politic-news.component.css']
})
export class PoliticNewsComponent {
  politics : any =[]
  constructor(public servic :PoliticalapiService){
    this.servic.get().subscribe((data)=>{
      this. politics=data
   
    })

  }
}
